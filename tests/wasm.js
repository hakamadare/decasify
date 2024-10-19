// SPDX-FileCopyrightText: © 2023 Caleb Maclennan <caleb@alerque.com>
// SPDX-License-Identifier: LGPL-3.0-only

import { titlecase, uppercase, lowercase, Locale, StyleGuide } from '../pkg';

var input = "ILIK SU VE İTEN RÜZGARLAR"
var output = titlecase(input, Locale.TR)
console.log(output)

var input = "title with a twist: a colon"
var output = titlecase(input, Locale.EN, StyleGuide.DaringFireball)
console.log(output)
