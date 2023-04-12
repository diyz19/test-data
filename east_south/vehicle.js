// let origin = "wx4epnz0q70"
let vehicleRoute = [
    'wx4epnzb43q', 'wx4epqb2j16', 'wx4epqbbp9r', 'wx4epqc8437',
    'wx4epqf0j12', 'wx4epqf8p9k', 'wx4epqg2433', 'wx4epqgbhcm',
    'wx4epqu2p96', 'wx4epqv041r', 'wx4epqt56hp', 'wx4epqmndpp',
    'wx4epqm441z', 'wx4epqjj6hz', 'wx4epqj0dpx', 'wx4epmvh44x',
    'wx4epmtp6jr', 'wx4epmt4f0r', 'wx4epmmn45p', 'wx4epmm16np',
    'wx4epmjhf0z', 'wx4epmj045z', 'wx4epkv56nx', 'wx4epktnf1x',
    'wx4epkt44hq', 'wx4epkmj6pq', 'wx4epkm0f4n', 'wx4epkjh4jn',
    'wx4ep7vp6py', 'wx4ep7v4f4y', 'wx4ep7tn4jw', 'wx4ep7t1d0w',
    'wx4ep7mhf5q', 'wx4ep7m04nn', 'wx4ep7j5d1n', 'wx4ep6vnf5y',
    'wx4ep6v44ny', 'wx4ep6tjd1w', 'wx4ep6t0fhw', 'wx4ep6mh4pq',
    'wx4ep6jpd4q', 'wx4ep6j4fjn', 'wx4ep3vn60n', 'wx4ep3v1d4y',
    'wx4ep3thfjy', 'wx4ep3t060w', 'wx4ep3m5d5w', 'wx4ep3jnfnq',
    'wx4ep3j461q', 'wx4ep2vjdhn', 'wx4ep2vtsu5', 'wx4ep2yjxs0',
    'wx4ep2yvdhh', 'wx4ep2zmsu1', 'wx4ep2zvxkj', 'wx4ep8btdh4',
    'wx4ep8cjssn', 'wx4ep8ctxk5', 'wx4ep8fm9up', 'wx4ep8fvssh',
    'wx4ep8gmxk0', 'wx4ep8uj9uj', 'wx4ep8utss1', 'wx4ep8vjxhn',
    'wx4ep8vv9u4', 'wx4ep8ymskp', 'wx4ep8yvxh5', 'wx4ep8zt9u0',
    'wx4epbbjskh', 'wx4epbbtxh1', 'wx4epbcm9sj', 'wx4epbcvsk4',
    'wx4epbfmwup', 'wx4epbgj9s5', 'wx4epbgtsk0', 'wx4epbujwuh',
    'wx4epbuv9s1', 'wx4epbvmshj', 'wx4epbvvwu4', 'wx4epbyt9kn'
]

// new s({name:"getPosition",call:"eth_getPosition",params:2,inputFormatter:[v.inputAddressFormatter,v.inputDefaultBlockNumberFormatter]}),
// new s({name:"getAccountByRegion",call:"eth_getAccountByRegion",params:2,inputFormatter:[v.inputRegionFormatter,v.inputDefaultBlockNumberFormatter]}),
// new s({name:"getTxByRegion",call:"eth_getTxByRegion",params:2,inputFormatter:[v.inputRegionFormatter,v.inputDefaultBlockNumberFormatter]}),
// new s({name:"getRpByRegion",call:"eth_getRpByRegion",params:2,inputFormatter:[v.inputRegionFormatter,v.inputDefaultBlockNumberFormatter]}),

// let Bits = [16, 8, 4, 2, 1];
// let Base32 = "0123456789bcdefghjkmnpqrstuvwxyz".split("");

// let originLL = decode_geohash(origin)
// let lon = originLL[0]
// let lat = originLL[2]

// for(let i = 0; i < 10; i++){
//     lon = lon +  0.0008
//     let cur = encode_geohash(lon, lat, 11)
//     vehicleRoute.push(cur)
// }
// for(let i = 0; i < 40; i++){
//     lat = lat - 0.0008
//     let cur = encode_geohash(lon, lat, 11)
//     vehicleRoute.push(cur)
// }
// for(let i = 0; i < 30; i++){
//     lon = lon + 0.0008
//     let cur = encode_geohash(lon, lat, 11)
//     vehicleRoute.push(cur)
// }

// console.log(vehicleRoute)

// function encode_geohash(longitude, latitude,precision){
// 	var geohash = "";
// 	var even = true;
// 	var bit = 0;
// 	var ch = 0;
// 	var pos = 0;
//     var lat = [-90,90];
// 	var lon = [-180,180];
// 	while(geohash.length < precision){
// 		var mid;

//         if (even)
//         {
//             mid = (lon[0] + lon[1])/2;
//             if (longitude > mid)
//             {
//                 ch |= Bits[bit];
//                 lon[0] = mid;
//              }
//             else
//                 lon[1] = mid;
//         }
// 		else
//         {
//             mid = (lat[0] + lat[1])/2;
//             if (latitude > mid)
//             {
//                 ch |= Bits[bit];
//                 lat[0] = mid;
//             }
//             else
//                 lat[1] = mid;
// 		}
//         even = !even;
//         if (bit < 4)
//             bit++;
//         else
//         {
//             geohash += Base32[ch];
//             bit = 0;
//             ch = 0;
//         }
// 	}
// 	return geohash;
// }

// function decode_geohash(geohash)
// {
// 	var even = true;
//     var lat = [-90,90];
// 	var lon = [-180,180];

// 	for(var i=0; i< geohash.length; i++)
// 	{
// 		var c= geohash[i];
// 		var cd = Base32.indexOf(c);
// 		for (var j = 0; j < 5; j++)
// 		{
// 			var mask = Bits[j];
// 			if (even)
// 			{
// 				RefineInterval(lon, cd, mask);
// 			}
// 			else
// 			{
// 				RefineInterval(lat, cd, mask);
// 			}
// 			even = !even;
// 		}
// 	}

// 	return new Array(lon[0], lon[1], lat[0], lat[1]);
// }

// function RefineInterval(interval, cd, mask)
// {
// 	if ((cd & mask) != 0)
// 	{
// 		interval[0] = (interval[0] + interval[1])/2;
// 	}
// 	else
// 	{
// 		interval[1] = (interval[0] + interval[1])/2;
// 	}
// }