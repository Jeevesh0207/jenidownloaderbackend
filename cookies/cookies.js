const ytdl = require("@distube/ytdl-core");

const cookies = [
    {
        "domain": ".youtube.com",
        "expirationDate": 1730052771.253628,
        "hostOnly": false,
        "httpOnly": true,
        "name": "GPS",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "1"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1756970129.545117,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSIDTS",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "sidts-CjEBUFGoh3Mr8fDQHbiftrt0Czbteqjve92y96XB2M6PjB8aNdbPgnrsN6TN9c5_ESblEAA"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1764610977.154976,
        "hostOnly": false,
        "httpOnly": false,
        "name": "PREF",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "f4=4000000&f6=40000000&tz=Asia.Calcutta&f7=100"
    }
]

const agentOptions = {
    pipelining: 5,
    maxRedirections: 0,
    localAddress: "127.0.0.1",
};

const agent = ytdl.createAgent(cookies);

module.exports =  { agent }