// let origin = "wx4epnz0q70"
let vehicleRoute = [
        'wx4epnzb0b9', 'wx4epqb252w', 'wx4epqbbn0e', 'wx4epqc808x',
        'wx4epqf052s', 'wx4epqf8n08', 'wx4epqg208t', 'wx4epqgb529',
        'wx4epqu2jbw', 'wx4epqv008d', 'wx4epqt52e6', 'wx4epqmn8w6',
        'wx4epqm4094', 'wx4epqjj2s4', 'wx4epqj08wf', 'wx4epmvh09f',
        'wx4epmtp2sd', 'wx4epmt48xd', 'wx4epmmn0d6', 'wx4epmm12t6',
        'wx4epmjhb84', 'wx4epmj00e4', 'wx4epkv52tf', 'wx4epktnb8f',
        'wx4epkt40ed', 'wx4epkmj2wd', 'wx4epkm0b96', 'wx4epkjh0s6',
        'wx4ep7vp2x4', 'wx4ep7v4bd4', 'wx4ep7tn0sf', 'wx4ep7t12xd',
        'wx4ep7mhbdd', 'wx4ep7m00t6', 'wx4ep7j5886', 'wx4ep6vnbe4',
        'wx4ep6v40w4', 'wx4ep6tj88f', 'wx4ep6t0bef', 'wx4ep6mh0wd',
        'wx4ep6jp89d', 'wx4ep6j4bs6', 'wx4ep3vn0x6', 'wx4ep3v18d4',
        'wx4ep3thbt4', 'wx4ep3t00xf', 'wx4ep3m58df', 'wx4ep3jnbtd',
        'wx4ep3j428d', 'wx4ep2vj8e6', 'wx4ep2vte5r', 'wx4ep2yjtg7',
        'wx4ep2yv8e2', 'wx4ep2zme5k', 'wx4ep2zvtg3', 'wx4ep8bt87m',
        'wx4ep8cje56', 'wx4ep8ctteq', 'wx4ep8fm877', 'wx4ep8fvdgr',
        'wx4ep8gmtek', 'wx4ep8uj872', 'wx4ep8utdgm', 'wx4ep8vjte3',
        'wx4ep8vv85q', 'wx4ep8ymdg7', 'wx4ep8yvt7r', 'wx4ep8zt85k',
        'wx4epbbjdg2', 'wx4epbbtt7m', 'wx4epbcm853', 'wx4epbcvdeq',
        'wx4epbfmt76', 'wx4epbfvxgr', 'wx4epbgtde7', 'wx4epbujt72',
        'wx4epbutxgk', 'wx4epbvmde3', 'wx4epbvvt5m', 'wx4epbymxg6'
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