#!/usr/bin/env node
/* eslint-disable header/header */

import { downloadAndUnzipVSCode } from './server/download';

downloadAndUnzipVSCode('stable').then((build) => {
	console.log(build);
	process.exit(0);
});
