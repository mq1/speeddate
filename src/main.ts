// SPDX-FileCopyrightText: 2024 Manuel Quarneti <manuelquarneti@protonmail.com>
// SPDX-License-Identifier: GPL-3.0-only

import "@picocss/pico/css/pico.fuchsia.min.css";
import App from "./App.svelte";

const app = new App({
	target: document.getElementById("app") as Element,
});

export default app;
