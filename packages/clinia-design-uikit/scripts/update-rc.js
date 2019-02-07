#!/usr/bin/env node

/* eslint strict:0, camelcase:0 */

'use strict';

require('@clinia/design-tools/lib/updateComponents')(name => !!name.match(/^rc-/));
