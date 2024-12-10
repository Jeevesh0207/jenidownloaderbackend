const ytdl = require("@distube/ytdl-core");

const cookies = [
    {
        "domain": ".youtube.com",
        "expirationDate": 1768372258.188456,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-3PSID",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "g.a000rAi39Tk_bRA6_lbNfRRmtHbbsrm28EXeQn74cea7LdD7ZuZkIDfEb8hl-H20Qa4Y81ZUxwACgYKAcYSARASFQHGX2Mijn4qoGMqHRujLwYgBVnO0RoVAUF8yKon-g6Ub-bNmqHR4Fc8iEbh0076"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1765386630.252059,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSIDTS",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "sidts-CjEBQT4rXxDahgb-2VQF9Xi1WXJZ4rrwmvolETRF3E8JXbcTGVzJSS9s_wBwYR6VVjh7EAA"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1733851238,
        "hostOnly": false,
        "httpOnly": false,
        "name": "CONSISTENCY",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "AKreu9sC2kVWmbFis_xo3wGe9305kdXMcTa5C4aWPJjT458nXBdHNBdDlJV05XrnRQRj_EYWRk2InsTGAmTw-fnQjCQWYAlX8WQtER2Fy-K6nbQvmRvGi5doQ8AUSFyd7SB5ETDnlXYmbP9ksl3J4rNV"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1768372258.188209,
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
        "expirationDate": 1765386638.303364,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSIDCC",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "AKEyXzXdSOlHbGYO2Vuh3uwzsLZwJhfSCiWJkIfq3i82oGNxgcLq58xiKKsXHeyZz2LFg8E4"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1768372258.188137,
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
        "expirationDate": 1768372258.188237,
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
        "expirationDate": 1768372258.188429,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-1PSID",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "g.a000rAi39Tk_bRA6_lbNfRRmtHbbsrm28EXeQn74cea7LdD7ZuZkQD_7Nvkr2fOxpU5oKaFBLAACgYKAeASARASFQHGX2MiPJ8sXI5XH2X1UCjDUQMqCxoVAUF8yKpwSdsbhN0nK9Vl6T3wZvAY0076"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1768372258.188266,
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
        "expirationDate": 1765386638.303443,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-3PSIDCC",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "AKEyXzU0OMVHrSpa6DK10n7hy65kjkBKJ9crAynMTj33SnTYYJrDDnmR0BvB5A4jW2IxFTl4rw"
    },
    {
        "domain": ".youtube.com",
        "expirationDate": 1765386630.252287,
        "hostOnly": false,
        "httpOnly": true,
        "name": "__Secure-3PSIDTS",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "sidts-CjEBQT4rXxDahgb-2VQF9Xi1WXJZ4rrwmvolETRF3E8JXbcTGVzJSS9s_wBwYR6VVjh7EAA"
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
        "expirationDate": 1768410633.767966,
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
};

const agent = ytdl.createAgent(cookies, agentOptions);

module.exports =  { agent }