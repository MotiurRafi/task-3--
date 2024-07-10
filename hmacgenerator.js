import  crypto  from "crypto";


class HMACGenerator {
    static generateHmac(key, cMove) {
        return crypto.createHmac("sha256", key).update(cMove).digest("hex");
    }
}

export default HMACGenerator; 