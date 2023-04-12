import geohash

# 纬度，经度
lat = 39.95548
lng = 116.34232
precision = 11

gh = geohash.encode(lat, lng, precision)
print(gh)
lat, lng = geohash.decode('wx4er3tvs9s')
lat1, lng1 = geohash.decode('wx4g200hxgf')
lat2, lng2 = geohash.decode('wx4g200hxsp')
print(lat1, lng1,lat2, lng2)
