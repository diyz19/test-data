import re
from geopy import Point
from geopy.distance import distance
import geohash

import numpy as np  # 导入numpy包，用于对数组的处理


def add_km_to_coordinates(latitude, longitude, km):
    """Returns a tuple of (new_latitude, new_longitude) after adding `km` kilometers to the given coordinates"""
    current_location = Point(latitude, longitude)
    distance_km = km / 1000  # Convert meters to kilometers
    new_location = distance(kilometers=distance_km).destination(current_location, 180)
    return new_location.latitude, new_location.longitude


def cha(match):
    current_latitude, current_longitude = geohash.decode(match)
    km_to_add = 6  # Add 10 kilometers
    km_to_subtract = 6  # Subtract 5 kilometers
    new_latitude, new_longitude = add_km_to_coordinates(current_latitude, current_longitude, km_to_add)
    # print(f"New location after adding {km_to_add} kilometers: ({new_latitude}, {new_longitude})")
    lat = new_latitude
    lng = new_longitude
    precision = 11
    gh = geohash.encode(lat, lng, precision)
    return gh


# 打开文件并读取内容
with open('costMap_GeoHash.json', 'r') as file:
    content = file.read()

# 使用正则表达式匹配需要替换的内容
pattern = r'Geohash":"([A-Za-z0-9]{11})"'
pattern1 = r'coordinates":\["[0123456789bcdefghjkmnpqrstuvwxyz]+(?:",\s*"[0123456789bcdefghjkmnpqrstuvwxyz]+)*"\]'
# match = re.search(pattern, content)
matches = re.findall(pattern, content, re.DOTALL)
matches1 = re.findall(pattern1, content, re.DOTALL)
print(matches)

# print(match.group())
# 如果匹配成功，则替换匹配到的内容
op = []
op1 = []
# print(type(content))
new_content = ''
if matches:
    for match in matches:
        # print(match)
        # new_pattern = r'Geohash":"' + cha(match) + '"'
        op.append(match)
        op1.append(cha(match))
        # print(cha(match))
        # new_content = re.sub(pattern, new_pattern, content)
    #     new_content = content.replace(match, cha(match))
    #     # 将修改后的内容写回文件
    # with open('example1.txt', 'w') as file:
    #     file.write(new_content)

    # print('替换完成。')
else:
    print('未找到匹配的内容。')

print(matches1)
if matches1:
    for match in matches1:
        # print(match[14:-1])
        for j in match[14:-1].split(','):
            # print(j[1:-1])
            j = j[1:-1]
            op.append(j)
            op1.append(cha(j))
            # new_pattern = r'Geohash":"' + cha(match) + '"'
            # new_content = re.sub(pattern, new_pattern, content)
    #         content = content.replace(j, cha(j))
    #         # 将修改后的内容写回文件
    # with open('example1.txt', 'w') as file:
    #     file.write(content)

    # print('替换完成。')
else:
    print('未找到匹配的内容。')

print(op)
print(op1)
for i in op:
    content = content.replace(i, cha(i))
    # 将修改后的内容写回文件
    with open('example1.txt', 'w') as file:
        file.write(content)
