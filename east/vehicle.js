// let origin = "wx4epnz0q70"
let vehicleRoute = [
        'wx4epnzb66w', 'wx4epqb2m4d', 'wx4epqbbrdx', 'wx4epqc866e',
        'wx4epqf0m48', 'wx4epqf8rds', 'wx4epqg2669', 'wx4epqgbkft',
        'wx4epqu2rdd', 'wx4epqv064x', 'wx4epqt5djx', 'wx4epqmp40r',
        'wx4epqm465r', 'wx4epqjjdnp', 'wx4epqj141p', 'wx4epmvh65z',
        'wx4epmtpdnz', 'wx4epmt541x', 'wx4epmmn6hx', 'wx4epmm1dpr',
        'wx4epmjj44r', 'wx4epmj06jp', 'wx4epkv5dpz', 'wx4epktp44z',
        'wx4epkt46jw', 'wx4epkmjf0w', 'wx4epkm145q', 'wx4epkjh6nq',
        'wx4ep7vpf1n', 'wx4ep7v54hn', 'wx4ep7tn6ny', 'wx4ep7t1f1y',
        'wx4ep7mj4hw', 'wx4ep7m06pw', 'wx4ep7j5f4q', 'wx4ep6vp4jq',
        'wx4ep6v4d0n', 'wx4ep6tjf5n', 'wx4ep6t14jy', 'wx4ep6mhd0y',
        'wx4ep6jpf5w', 'wx4ep6j54nw', 'wx4ep3vnd1q', 'wx4ep3v1fhq',
        'wx4ep3tj4pn', 'wx4ep3t0d1y', 'wx4ep3m5fhy', 'wx4ep3jp4pw',
        'wx4ep3j4d4w', 'wx4ep2vjfjq', 'wx4ep2vtuv7', 'wx4ep2yjzt2',
        'wx4ep2yvfjk', 'wx4ep2zmuv3', 'wx4ep2zvzmm', 'wx4ep8btfj6',
        'wx4ep8cjutq', 'wx4ep8ctzm7', 'wx4ep8fmcvr', 'wx4ep8fvutk',
        'wx4ep8gmzm2', 'wx4ep8ujcvm', 'wx4ep8utut3', 'wx4ep8vjzjq',
        'wx4ep8vvcv6', 'wx4ep8ymumr', 'wx4ep8yvzj7', 'wx4ep8ztcv2',
        'wx4epbbjumk', 'wx4epbbtzj3', 'wx4epbcmctm', 'wx4epbcvum6',
        'wx4epbfmyvr', 'wx4epbgjct7', 'wx4epbgtum2', 'wx4epbujyvk',
        'wx4epbuvct3', 'wx4epbvmujm', 'wx4epbvvyv6', 'wx4epbytcmq'
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