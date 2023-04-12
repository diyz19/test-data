from geopy import Point
from geopy.distance import distance
import geohash

import numpy as np  # 导入numpy包，用于对数组的处理


# with open('XXX.txt', 'w') as f:  # w代表write,表示输出到名为XXX的txt文件中
# f.write(test)  # test可以是文字、要保存的数据等，但对数组不适用
# f.close()


# 0:north  90:east  180:south  270:west
def add_km_to_coordinates(latitude, longitude, km):
    """Returns a tuple of (new_latitude, new_longitude) after adding `km` kilometers to the given coordinates"""
    current_location = Point(latitude, longitude)
    distance_km = km / 1000  # Convert meters to kilometers
    new_location = distance(kilometers=distance_km).destination(current_location, 0)
    return new_location.latitude, new_location.longitude


def subtract_km_from_coordinates(latitude, longitude, km):
    """Returns a tuple of (new_latitude, new_longitude) after subtracting `km` kilometers from the given coordinates"""
    current_location = Point(latitude, longitude)
    distance_km = km / 1000  # Convert meters to kilometers
    new_location = distance(kilometers=distance_km).destination(current_location, 90)
    return new_location.latitude, new_location.longitude


# Example usage
with open(r'data.txt', encoding='utf-8') as f:  # 读取名为XXX的文件
    txt = f.readlines()  # 按行读取所有文件内容，以列表的形式展示
f.close()  # 关闭文件 读取txt文件完后要及时关闭，以防后续操作会有问题

south = []
east = []

data = []
for tt in txt:
    # print(tt)
    tmp = tt.split(",")
    for i in tmp:
        # print(i)
        k = i.replace(" ", "").replace("'", "").replace('"', '').replace('\n', '')
        if k != '':
            data.append(k)

data1 = []
with open('data.txt', 'r', encoding='utf8') as f:
    for i in f:
        for j in i.split():
            k = i.replace(" ", "").replace("'", "").replace('"', '').replace('\n', '')
            if k != '':
                data1.append(k)
# print(data1)
# print(data)

for tt in data:
    current_latitude, current_longitude = geohash.decode(tt)

    # current_latitude, current_longitude = geohash.decode('wx4epd6st8f')
    # current_latitude = 39.95548  # New York City latitude
    # current_longitude = 116.38627  # New York City longitude
    km_to_add = 6  # Add 10 kilometers
    km_to_subtract = 6  # Subtract 5 kilometers

    # Add kilometers to current location
    new_latitude, new_longitude = add_km_to_coordinates(current_latitude, current_longitude, km_to_add)
    print(f"New location after adding {km_to_add} kilometers: ({new_latitude}, {new_longitude})")

    lat = new_latitude
    lng = new_longitude
    precision = 11

    gh = geohash.encode(lat, lng, precision)
    print("geohash:", gh)
    south.append(gh)

    # Subtract kilometers from current location
    new_latitude, new_longitude = subtract_km_from_coordinates(current_latitude, current_longitude, km_to_subtract)
    print(f"New location after subtracting {km_to_subtract} kilometers: ({new_latitude}, {new_longitude})")

    lat = new_latitude
    lng = new_longitude
    precision = 11

    gh = geohash.encode(lat, lng, precision)
    print("geohash:", gh)
    east.append(gh)
# print(data1)
print(data)
print(south)
print(east)

# re = []
# re.append(new_latitude)
# re.append(new_longitude)
# np.savetxt('XXX.txt', re, fmt='%lf')  # 将数组data导出
