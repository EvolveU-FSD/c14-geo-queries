import { findCommunityBoundaryByCommCode } from "../models/communityBoundary.js";
import { disconnectDb } from "../db.js";
import { findParkingZoneInArea } from "../models/parkingZone.js";

const community = await findCommunityBoundaryByCommCode("BLN")

const zone = await findParkingZoneInArea(community.boundary)
for (const piece of zone) {
    console.log(piece.addressDesc, ':', piece.line.coordinates)
}
console.log('Found', zone.length,'pieces of zone')

await disconnectDb()