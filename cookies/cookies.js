const ytdl = require("@distube/ytdl-core");

const cookies = [
    {
        "domain": ".youtube.com",
        "expirationDate": 1764612298.570993,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-3PSID",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "g.a000pgi39dmsEQUPqsUJCsEIYrgZEJxLAsDq6CzAOH8-j-IjB3YyMJse1shSWucwO7CzguIKwgACgYKAaMSARASFQHGX2MiaU6Dy3L3LQcMcwKB8AeR-xoVAUF8yKrurcf6VsviS4ezCuCNmLkd0076"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1761589511.221284,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSIDTS",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "sidts-CjEBQT4rX9Pn6R7Pt5cCIXYWyJHCvgTCPh5OyQYqyhYneIlU-mAPACFlcWLndNMkdqE2EAA"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1764612298.570399,
        "hostOnly": false,
        "httpOnly": false,
        "name": "SAPISID",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "kkU0JXDwM7QUuGHw/AICx4hc5if52U3bpZ"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1761589998.283795,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSIDCC",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "AKEyXzXsgxvlUh9cPZyFP_aJA8PEqgw_yN-xlHRrjwMMqPxOQqJ_lwkReOqC_Nlun886u59b"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1764612298.570138,
        "hostOnly": false,
        "httpOnly": true,
        "name": "SSID",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "ATi3MTar5T3_VabxO"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1764612298.570482,
        "hostOnly": false,
        "httpOnly": false,
        "name": "__Secure-1PAPISID",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "kkU0JXDwM7QUuGHw/AICx4hc5if52U3bpZ"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1764612298.570875,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSID",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "g.a000pgi39dmsEQUPqsUJCsEIYrgZEJxLAsDq6CzAOH8-j-IjB3Yyz0VyhAIn33lueSW8rgvdFQACgYKAb4SARASFQHGX2MivoyfCBXur8M159JNfcXyfRoVAUF8yKpZF1orjaFpJTibv6R2lOGN0076"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1764612298.570648,
        "hostOnly": false,
        "httpOnly": false,
        "name": "__Secure-3PAPISID",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "kkU0JXDwM7QUuGHw/AICx4hc5if52U3bpZ"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1761589998.28382,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-3PSIDCC",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "AKEyXzV9omfiCDnzkOv57Ro0XVeCVdlM3zBL3tjUzV9fhM4Mb5VgxK2gBy6UPAEDK9cFr2HuGQ"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1761589511.221391,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-3PSIDTS",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "sidts-CjEBQT4rX9Pn6R7Pt5cCIXYWyJHCvgTCPh5OyQYqyhYneIlU-mAPACFlcWLndNMkdqE2EAA"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1764612300.840034,
        "hostOnly": false,
        "httpOnly": true,
        "name": "LOGIN_INFO",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "AFmmF2swRQIhAPE8hnvX9b63S-UnuF0ro_wFL3tFnKV1D9b3KBtHjmeJAiByucjjo9whN4eea3Q-ieZ6XVLD4BNZt3E48gJdN0b6fQ:QUQ3MjNmeG1KdWU3WXhlMDZsVjRLcnBYaXBlbHhfNU9fWml4WURYWXE4T01zdkllckcwd3hRVGJnZEJkdmhYdlRvZ095MmdURlBvVUJqd2hKSU94cU5lTWZidi16djlYR0QwbUFPSlNLbWQyejJiUFgxQXd4SVNrS2l4S2hVTGdzbUVjZ0NrcXE2UVVhcEVyYTBTVUxMWVRDZTFWcDlNZWVn"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1764613934.44403,
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