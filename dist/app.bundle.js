;(() => {
  'use strict'
  var A = {
      503: (A, e, n) => {
        n.d(e, { Z: () => w })
        var t = n(537),
          o = n.n(t),
          r = n(645),
          i = n.n(r),
          a = n(667),
          s = n.n(a),
          l = new URL(n(909), n.b),
          c = new URL(n(133), n.b),
          d = new URL(n(601), n.b),
          p = new URL(n(686), n.b),
          h = i()(o()),
          m = s()(l),
          u = s()(c),
          g = s()(d),
          f = s()(p)
        h.push([
          A.id,
          "/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  border-color: #6b7280;\n  border-width: 1px;\n  border-radius: 0px;\n  padding-top: 0.5rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-shadow: 0 0 #0000;\n}\n\n[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #2563eb;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  border-color: #2563eb;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\ninput::placeholder,textarea::placeholder {\n  color: #6b7280;\n  opacity: 1;\n}\n\n::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}\n\n::-webkit-date-and-time-value {\n  min-height: 1.5em;\n}\n\n::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nselect {\n  background-image: url(" +
            m +
            ");\n  background-position: right 0.5rem center;\n  background-repeat: no-repeat;\n  background-size: 1.5em 1.5em;\n  padding-right: 2.5rem;\n  -webkit-print-color-adjust: exact;\n     color-adjust: exact;\n          print-color-adjust: exact;\n}\n\n[multiple] {\n  background-image: initial;\n  background-position: initial;\n  background-repeat: unset;\n  background-size: initial;\n  padding-right: 0.75rem;\n  -webkit-print-color-adjust: unset;\n     color-adjust: unset;\n          print-color-adjust: unset;\n}\n\n[type='checkbox'],[type='radio'] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 0;\n  -webkit-print-color-adjust: exact;\n     color-adjust: exact;\n          print-color-adjust: exact;\n  display: inline-block;\n  vertical-align: middle;\n  background-origin: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  flex-shrink: 0;\n  height: 1rem;\n  width: 1rem;\n  color: #2563eb;\n  background-color: #fff;\n  border-color: #6b7280;\n  border-width: 1px;\n  --tw-shadow: 0 0 #0000;\n}\n\n[type='checkbox'] {\n  border-radius: 0px;\n}\n\n[type='radio'] {\n  border-radius: 100%;\n}\n\n[type='checkbox']:focus,[type='radio']:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #2563eb;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n\n[type='checkbox']:checked,[type='radio']:checked {\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n[type='checkbox']:checked {\n  background-image: url(" +
            u +
            ");\n}\n\n[type='radio']:checked {\n  background-image: url(" +
            g +
            ");\n}\n\n[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}\n\n[type='checkbox']:indeterminate {\n  background-image: url(" +
            f +
            ');\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n[type=\'checkbox\']:indeterminate:hover,[type=\'checkbox\']:indeterminate:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}\n\n[type=\'file\'] {\n  background: unset;\n  border-color: inherit;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-size: unset;\n  line-height: inherit;\n}\n\n[type=\'file\']:focus {\n  outline: 1px solid ButtonText;\n  outline: 1px auto -webkit-focus-ring-color;\n}main {\n  color: var(--tw-prose-body);\n  max-width: 65ch;\n}main :where([class~="lead"]):not(:where([class~="not-prose"] *)) {\n  color: var(--tw-prose-lead);\n  font-size: 1.25em;\n  line-height: 1.6;\n  margin-top: 1.2em;\n  margin-bottom: 1.2em;\n}main :where(a):not(:where([class~="not-prose"] *)) {\n  color: var(--tw-prose-links);\n  text-decoration: underline;\n  font-weight: 500;\n}main :where(strong):not(:where([class~="not-prose"] *)) {\n  color: var(--tw-prose-bold);\n  font-weight: 600;\n}main :where(ol):not(:where([class~="not-prose"] *)) {\n  list-style-type: decimal;\n  padding-left: 1.625em;\n}main :where(ol[type="A"]):not(:where([class~="not-prose"] *)) {\n  list-style-type: upper-alpha;\n}main :where(ol[type="a"]):not(:where([class~="not-prose"] *)) {\n  list-style-type: lower-alpha;\n}main :where(ol[type="A" s]):not(:where([class~="not-prose"] *)) {\n  list-style-type: upper-alpha;\n}main :where(ol[type="a" s]):not(:where([class~="not-prose"] *)) {\n  list-style-type: lower-alpha;\n}main :where(ol[type="I"]):not(:where([class~="not-prose"] *)) {\n  list-style-type: upper-roman;\n}main :where(ol[type="i"]):not(:where([class~="not-prose"] *)) {\n  list-style-type: lower-roman;\n}main :where(ol[type="I" s]):not(:where([class~="not-prose"] *)) {\n  list-style-type: upper-roman;\n}main :where(ol[type="i" s]):not(:where([class~="not-prose"] *)) {\n  list-style-type: lower-roman;\n}main :where(ol[type="1"]):not(:where([class~="not-prose"] *)) {\n  list-style-type: decimal;\n}main :where(ul):not(:where([class~="not-prose"] *)) {\n  list-style-type: disc;\n  padding-left: 1.625em;\n}main :where(ol > li):not(:where([class~="not-prose"] *))::marker {\n  font-weight: 400;\n  color: var(--tw-prose-counters);\n}main :where(ul > li):not(:where([class~="not-prose"] *))::marker {\n  color: var(--tw-prose-bullets);\n}main :where(hr):not(:where([class~="not-prose"] *)) {\n  border-color: var(--tw-prose-hr);\n  border-top-width: 1px;\n  margin-top: 3em;\n  margin-bottom: 3em;\n}main :where(blockquote):not(:where([class~="not-prose"] *)) {\n  font-weight: 500;\n  font-style: italic;\n  color: var(--tw-prose-quotes);\n  border-left-width: 0.25rem;\n  border-left-color: var(--tw-prose-quote-borders);\n  quotes: "\\201C""\\201D""\\2018""\\2019";\n  margin-top: 1.6em;\n  margin-bottom: 1.6em;\n  padding-left: 1em;\n}main :where(blockquote p:first-of-type):not(:where([class~="not-prose"] *))::before {\n  content: open-quote;\n}main :where(blockquote p:last-of-type):not(:where([class~="not-prose"] *))::after {\n  content: close-quote;\n}main :where(h1):not(:where([class~="not-prose"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 800;\n  font-size: 2.25em;\n  margin-top: 0;\n  margin-bottom: 0.8888889em;\n  line-height: 1.1111111;\n}main :where(h1 strong):not(:where([class~="not-prose"] *)) {\n  font-weight: 900;\n}main :where(h2):not(:where([class~="not-prose"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 700;\n  font-size: 1.5em;\n  margin-top: 2em;\n  margin-bottom: 1em;\n  line-height: 1.3333333;\n}main :where(h2 strong):not(:where([class~="not-prose"] *)) {\n  font-weight: 800;\n}main :where(h3):not(:where([class~="not-prose"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  font-size: 1.25em;\n  margin-top: 1.6em;\n  margin-bottom: 0.6em;\n  line-height: 1.6;\n}main :where(h3 strong):not(:where([class~="not-prose"] *)) {\n  font-weight: 700;\n}main :where(h4):not(:where([class~="not-prose"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.5em;\n  margin-bottom: 0.5em;\n  line-height: 1.5;\n}main :where(h4 strong):not(:where([class~="not-prose"] *)) {\n  font-weight: 700;\n}main :where(figure > *):not(:where([class~="not-prose"] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}main :where(figcaption):not(:where([class~="not-prose"] *)) {\n  color: var(--tw-prose-captions);\n  font-size: 0.875em;\n  line-height: 1.4285714;\n  margin-top: 0.8571429em;\n}main :where(code):not(:where([class~="not-prose"] *)) {\n  color: var(--tw-prose-code);\n  font-weight: 600;\n  font-size: 0.875em;\n}main :where(code):not(:where([class~="not-prose"] *))::before {\n  content: "`";\n}main :where(code):not(:where([class~="not-prose"] *))::after {\n  content: "`";\n}main :where(a code):not(:where([class~="not-prose"] *)) {\n  color: var(--tw-prose-links);\n}main :where(pre):not(:where([class~="not-prose"] *)) {\n  color: var(--tw-prose-pre-code);\n  background-color: var(--tw-prose-pre-bg);\n  overflow-x: auto;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n  margin-top: 1.7142857em;\n  margin-bottom: 1.7142857em;\n  border-radius: 0.375rem;\n  padding-top: 0.8571429em;\n  padding-right: 1.1428571em;\n  padding-bottom: 0.8571429em;\n  padding-left: 1.1428571em;\n}main :where(pre code):not(:where([class~="not-prose"] *)) {\n  background-color: transparent;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-weight: inherit;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit;\n}main :where(pre code):not(:where([class~="not-prose"] *))::before {\n  content: none;\n}main :where(pre code):not(:where([class~="not-prose"] *))::after {\n  content: none;\n}main :where(table):not(:where([class~="not-prose"] *)) {\n  width: 100%;\n  table-layout: auto;\n  text-align: left;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n}main :where(thead):not(:where([class~="not-prose"] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-th-borders);\n}main :where(thead th):not(:where([class~="not-prose"] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  vertical-align: bottom;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}main :where(tbody tr):not(:where([class~="not-prose"] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-td-borders);\n}main :where(tbody tr:last-child):not(:where([class~="not-prose"] *)) {\n  border-bottom-width: 0;\n}main :where(tbody td):not(:where([class~="not-prose"] *)) {\n  vertical-align: baseline;\n  padding-top: 0.5714286em;\n  padding-right: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-left: 0.5714286em;\n}main {\n  --tw-prose-body: #374151;\n  --tw-prose-headings: #111827;\n  --tw-prose-lead: #4b5563;\n  --tw-prose-links: #111827;\n  --tw-prose-bold: #111827;\n  --tw-prose-counters: #6b7280;\n  --tw-prose-bullets: #d1d5db;\n  --tw-prose-hr: #e5e7eb;\n  --tw-prose-quotes: #111827;\n  --tw-prose-quote-borders: #e5e7eb;\n  --tw-prose-captions: #6b7280;\n  --tw-prose-code: #111827;\n  --tw-prose-pre-code: #e5e7eb;\n  --tw-prose-pre-bg: #1f2937;\n  --tw-prose-th-borders: #d1d5db;\n  --tw-prose-td-borders: #e5e7eb;\n  --tw-prose-invert-body: #d1d5db;\n  --tw-prose-invert-headings: #fff;\n  --tw-prose-invert-lead: #9ca3af;\n  --tw-prose-invert-links: #fff;\n  --tw-prose-invert-bold: #fff;\n  --tw-prose-invert-counters: #9ca3af;\n  --tw-prose-invert-bullets: #4b5563;\n  --tw-prose-invert-hr: #374151;\n  --tw-prose-invert-quotes: #f3f4f6;\n  --tw-prose-invert-quote-borders: #374151;\n  --tw-prose-invert-captions: #9ca3af;\n  --tw-prose-invert-code: #fff;\n  --tw-prose-invert-pre-code: #d1d5db;\n  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);\n  --tw-prose-invert-th-borders: #4b5563;\n  --tw-prose-invert-td-borders: #374151;\n  font-size: 1rem;\n  line-height: 1.75;\n}main :where(p):not(:where([class~="not-prose"] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}main :where(img):not(:where([class~="not-prose"] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}main :where(video):not(:where([class~="not-prose"] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}main :where(figure):not(:where([class~="not-prose"] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}main :where(h2 code):not(:where([class~="not-prose"] *)) {\n  font-size: 0.875em;\n}main :where(h3 code):not(:where([class~="not-prose"] *)) {\n  font-size: 0.9em;\n}main :where(li):not(:where([class~="not-prose"] *)) {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}main :where(ol > li):not(:where([class~="not-prose"] *)) {\n  padding-left: 0.375em;\n}main :where(ul > li):not(:where([class~="not-prose"] *)) {\n  padding-left: 0.375em;\n}main > :where(ul > li p):not(:where([class~="not-prose"] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}main > :where(ul > li > *:first-child):not(:where([class~="not-prose"] *)) {\n  margin-top: 1.25em;\n}main > :where(ul > li > *:last-child):not(:where([class~="not-prose"] *)) {\n  margin-bottom: 1.25em;\n}main > :where(ol > li > *:first-child):not(:where([class~="not-prose"] *)) {\n  margin-top: 1.25em;\n}main > :where(ol > li > *:last-child):not(:where([class~="not-prose"] *)) {\n  margin-bottom: 1.25em;\n}main :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}main :where(hr + *):not(:where([class~="not-prose"] *)) {\n  margin-top: 0;\n}main :where(h2 + *):not(:where([class~="not-prose"] *)) {\n  margin-top: 0;\n}main :where(h3 + *):not(:where([class~="not-prose"] *)) {\n  margin-top: 0;\n}main :where(h4 + *):not(:where([class~="not-prose"] *)) {\n  margin-top: 0;\n}main :where(thead th:first-child):not(:where([class~="not-prose"] *)) {\n  padding-left: 0;\n}main :where(thead th:last-child):not(:where([class~="not-prose"] *)) {\n  padding-right: 0;\n}main :where(tbody td:first-child):not(:where([class~="not-prose"] *)) {\n  padding-left: 0;\n}main :where(tbody td:last-child):not(:where([class~="not-prose"] *)) {\n  padding-right: 0;\n}main > :where(:first-child):not(:where([class~="not-prose"] *)) {\n  margin-top: 0;\n}main > :where(:last-child):not(:where([class~="not-prose"] *)) {\n  margin-bottom: 0;\n}main {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3.5rem;\n  padding: 2rem;\n  padding-bottom: 0px;\n}footer {\n  margin-top: 3rem;\n  display: flex;\n  height: 6rem;\n  align-items: center;\n  justify-content: center;\n  border-top-width: 1px;\n  padding: 2.5rem;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}.submit-btn {\n  width: auto;\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}.input {\n  border-radius: 0.5rem;\n  border-width: 2px;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}.col-span-2 {\n  grid-column: span 2 / span 2;\n}.mr-auto {\n  margin-right: auto;\n}.mr-2 {\n  margin-right: 0.5rem;\n}.mt-1 {\n  margin-top: 0.25rem;\n}.block {\n  display: block;\n}.flex {\n  display: flex;\n}.grid {\n  display: grid;\n}.w-full {\n  width: 100%;\n}.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}.gap-6 {\n  gap: 1.5rem;\n}.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}.underline {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}@media (min-width: 640px) {\n\n  .sm\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n}',
          '',
          {
            version: 3,
            sources: ['webpack://./src/scss/base.scss', '<no source>'],
            names: [],
            mappings:
              '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',
            sourcesContent: [
              '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  main {\n    @apply prose mx-auto mt-14 p-8 pb-0;\n  }\n\n  footer {\n    @apply mt-12 h-24 border-t flex items-center justify-center p-10 text-gray-500;\n  }\n}\n\n@layer components {\n  .submit-btn {\n    @apply bg-blue-500 w-auto px-4 py-2 text-white;\n  }\n\n  .input {\n    @apply border-2 border-gray-300 rounded-lg px-4 py-2;\n  }\n}\n',
              null,
            ],
            sourceRoot: '',
          },
        ])
        const w = h
      },
      277: (A, e, n) => {
        n.d(e, { Z: () => a })
        var t = n(537),
          o = n.n(t),
          r = n(645),
          i = n.n(r)()(o())
        i.push([
          A.id,
          '.confetti-canvas{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1}.game-container{width:100%;aspect-ratio:1;margin:auto;display:grid;grid-template-rows:repeat(var(--rows), 1fr);grid-template-columns:repeat(var(--cols), 1fr);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.game-container .cell{cursor:pointer;display:grid;place-items:center;color:rgba(0,0,0,0);transition:200ms;border:5px solid rgba(0,0,0,0);background-color:#f3f4f6}.game-container .cell:nth-child(odd){background-color:#e5e7eb}.game-container .cell:hover{background-color:#fff}.game-container .cell.revealed,.game-container .cell.flagged{color:#374151;background-color:#fff}.game-container .cell.revealed{cursor:not-allowed}.game-container .cell.flagged{background-color:#bfdbfe}.game-container .cell.revealed.mine{background-color:#fecaca}',
          '',
          {
            version: 3,
            sources: ['webpack://./src/scss/game.scss'],
            names: [],
            mappings:
              'AAAA,iBACE,cAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CACA,SAAA,CAKF,gBACE,UAAA,CACA,cAAA,CACA,WAAA,CACA,YAAA,CACA,2CAAA,CACA,8CAAA,CACA,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CAEA,sBACE,cAAA,CACA,YAAA,CACA,kBAAA,CACA,mBAAA,CACA,gBAAA,CACA,8BAAA,CACA,wBAAA,CAEA,qCACE,wBAAA,CAGF,4BACE,qBAAA,CAGF,6DAEE,aAAA,CACA,qBAAA,CAGF,+BACE,kBAAA,CAGF,8BACE,wBAAA,CAGF,oCACE,wBAAA',
            sourcesContent: [
              ".confetti-canvas {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1;\n}\n\n/* GAME STYLES */\n\n.game-container {\n  width: 100%;\n  aspect-ratio: 1;\n  margin: auto;\n  display: grid;\n  grid-template-rows: repeat(var(--rows), 1fr);\n  grid-template-columns: repeat(var(--cols), 1fr);\n  user-select: none;\n\n  .cell {\n    cursor: pointer;\n    display: grid;\n    place-items: center;\n    color: transparent;\n    transition: 200ms;\n    border: 5px solid transparent;\n    background-color: theme('colors.gray.100');\n\n    &:nth-child(odd) {\n      background-color: theme('colors.gray.200');\n    }\n\n    &:hover {\n      background-color: theme('colors.white');\n    }\n\n    &.revealed,\n    &.flagged {\n      color: theme('colors.gray.700');\n      background-color: theme('colors.white');\n    }\n\n    &.revealed {\n      cursor: not-allowed;\n    }\n\n    &.flagged {\n      background-color: theme('colors.blue.200');\n    }\n\n    &.revealed.mine {\n      background-color: theme('colors.red.200');\n    }\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ])
        const a = i
      },
      645: (A) => {
        A.exports = function (A) {
          var e = []
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = '',
                  t = void 0 !== e[5]
                return (
                  e[4] && (n += '@supports ('.concat(e[4], ') {')),
                  e[2] && (n += '@media '.concat(e[2], ' {')),
                  t &&
                    (n += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {'
                    )),
                  (n += A(e)),
                  t && (n += '}'),
                  e[2] && (n += '}'),
                  e[4] && (n += '}'),
                  n
                )
              }).join('')
            }),
            (e.i = function (A, n, t, o, r) {
              'string' == typeof A && (A = [[null, A, void 0]])
              var i = {}
              if (t)
                for (var a = 0; a < this.length; a++) {
                  var s = this[a][0]
                  null != s && (i[s] = !0)
                }
              for (var l = 0; l < A.length; l++) {
                var c = [].concat(A[l])
                ;(t && i[c[0]]) ||
                  (void 0 !== r &&
                    (void 0 === c[5] ||
                      (c[1] = '@layer'
                        .concat(c[5].length > 0 ? ' '.concat(c[5]) : '', ' {')
                        .concat(c[1], '}')),
                    (c[5] = r)),
                  n &&
                    (c[2]
                      ? ((c[1] = '@media '
                          .concat(c[2], ' {')
                          .concat(c[1], '}')),
                        (c[2] = n))
                      : (c[2] = n)),
                  o &&
                    (c[4]
                      ? ((c[1] = '@supports ('
                          .concat(c[4], ') {')
                          .concat(c[1], '}')),
                        (c[4] = o))
                      : (c[4] = ''.concat(o))),
                  e.push(c))
              }
            }),
            e
          )
        }
      },
      667: (A) => {
        A.exports = function (A, e) {
          return (
            e || (e = {}),
            A
              ? ((A = String(A.__esModule ? A.default : A)),
                /^['"].*['"]$/.test(A) && (A = A.slice(1, -1)),
                e.hash && (A += e.hash),
                /["'() \t\n]|(%20)/.test(A) || e.needQuotes
                  ? '"'.concat(
                      A.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
                      '"'
                    )
                  : A)
              : A
          )
        }
      },
      537: (A) => {
        A.exports = function (A) {
          var e = A[1],
            n = A[3]
          if (!n) return e
          if ('function' == typeof btoa) {
            var t = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              o =
                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                  t
                ),
              r = '/*# '.concat(o, ' */'),
              i = n.sources.map(function (A) {
                return '/*# sourceURL='
                  .concat(n.sourceRoot || '')
                  .concat(A, ' */')
              })
            return [e].concat(i).concat([r]).join('\n')
          }
          return [e].join('\n')
        }
      },
      379: (A) => {
        var e = []
        function n(A) {
          for (var n = -1, t = 0; t < e.length; t++)
            if (e[t].identifier === A) {
              n = t
              break
            }
          return n
        }
        function t(A, t) {
          for (var r = {}, i = [], a = 0; a < A.length; a++) {
            var s = A[a],
              l = t.base ? s[0] + t.base : s[0],
              c = r[l] || 0,
              d = ''.concat(l, ' ').concat(c)
            r[l] = c + 1
            var p = n(d),
              h = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              }
            if (-1 !== p) e[p].references++, e[p].updater(h)
            else {
              var m = o(h, t)
              ;(t.byIndex = a),
                e.splice(a, 0, { identifier: d, updater: m, references: 1 })
            }
            i.push(d)
          }
          return i
        }
        function o(A, e) {
          var n = e.domAPI(e)
          return (
            n.update(A),
            function (e) {
              if (e) {
                if (
                  e.css === A.css &&
                  e.media === A.media &&
                  e.sourceMap === A.sourceMap &&
                  e.supports === A.supports &&
                  e.layer === A.layer
                )
                  return
                n.update((A = e))
              } else n.remove()
            }
          )
        }
        A.exports = function (A, o) {
          var r = t((A = A || []), (o = o || {}))
          return function (A) {
            A = A || []
            for (var i = 0; i < r.length; i++) {
              var a = n(r[i])
              e[a].references--
            }
            for (var s = t(A, o), l = 0; l < r.length; l++) {
              var c = n(r[l])
              0 === e[c].references && (e[c].updater(), e.splice(c, 1))
            }
            r = s
          }
        }
      },
      569: (A) => {
        var e = {}
        A.exports = function (A, n) {
          var t = (function (A) {
            if (void 0 === e[A]) {
              var n = document.querySelector(A)
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head
                } catch (A) {
                  n = null
                }
              e[A] = n
            }
            return e[A]
          })(A)
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            )
          t.appendChild(n)
        }
      },
      216: (A) => {
        A.exports = function (A) {
          var e = document.createElement('style')
          return A.setAttributes(e, A.attributes), A.insert(e, A.options), e
        }
      },
      565: (A, e, n) => {
        A.exports = function (A) {
          var e = n.nc
          e && A.setAttribute('nonce', e)
        }
      },
      795: (A) => {
        A.exports = function (A) {
          var e = A.insertStyleElement(A)
          return {
            update: function (n) {
              !(function (A, e, n) {
                var t = ''
                n.supports && (t += '@supports ('.concat(n.supports, ') {')),
                  n.media && (t += '@media '.concat(n.media, ' {'))
                var o = void 0 !== n.layer
                o &&
                  (t += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {'
                  )),
                  (t += n.css),
                  o && (t += '}'),
                  n.media && (t += '}'),
                  n.supports && (t += '}')
                var r = n.sourceMap
                r &&
                  'undefined' != typeof btoa &&
                  (t +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                      ' */'
                    )),
                  e.styleTagTransform(t, A, e.options)
              })(e, A, n)
            },
            remove: function () {
              !(function (A) {
                if (null === A.parentNode) return !1
                A.parentNode.removeChild(A)
              })(e)
            },
          }
        }
      },
      589: (A) => {
        A.exports = function (A, e) {
          if (e.styleSheet) e.styleSheet.cssText = A
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild)
            e.appendChild(document.createTextNode(A))
          }
        }
      },
      601: (A) => {
        A.exports =
          'data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e'
      },
      133: (A) => {
        A.exports =
          'data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e'
      },
      686: (A) => {
        A.exports =
          'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M4 8h8%27/%3e%3c/svg%3e'
      },
      909: (A) => {
        A.exports =
          'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e'
      },
    },
    e = {}
  function n(t) {
    var o = e[t]
    if (void 0 !== o) return o.exports
    var r = (e[t] = { id: t, exports: {} })
    return A[t](r, r.exports, n), r.exports
  }
  ;(n.m = A),
    (n.n = (A) => {
      var e = A && A.__esModule ? () => A.default : () => A
      return n.d(e, { a: e }), e
    }),
    (n.d = (A, e) => {
      for (var t in e)
        n.o(e, t) &&
          !n.o(A, t) &&
          Object.defineProperty(A, t, { enumerable: !0, get: e[t] })
    }),
    (n.o = (A, e) => Object.prototype.hasOwnProperty.call(A, e)),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      var A = n(379),
        e = n.n(A),
        t = n(795),
        o = n.n(t),
        r = n(569),
        i = n.n(r),
        a = n(565),
        s = n.n(a),
        l = n(216),
        c = n.n(l),
        d = n(589),
        p = n.n(d),
        h = n(503),
        m = {}
      ;(m.styleTagTransform = p()),
        (m.setAttributes = s()),
        (m.insert = i().bind(null, 'head')),
        (m.domAPI = o()),
        (m.insertStyleElement = c()),
        e()(h.Z, m),
        h.Z && h.Z.locals && h.Z.locals
      var u = n(277),
        g = {}
      ;(g.styleTagTransform = p()),
        (g.setAttributes = s()),
        (g.insert = i().bind(null, 'head')),
        (g.domAPI = o()),
        (g.insertStyleElement = c()),
        e()(u.Z, g),
        u.Z && u.Z.locals && u.Z.locals
      var f,
        w = new Uint8Array(16)
      function E() {
        if (
          !f &&
          !(f =
            ('undefined' != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ('undefined' != typeof msCrypto &&
              'function' == typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error(
            'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
          )
        return f(w)
      }
      const b =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        y = function (A) {
          return 'string' == typeof A && b.test(A)
        }
      for (var v = [], C = 0; C < 256; ++C)
        v.push((C + 256).toString(16).substr(1))
      const B = function (A, e, n) {
        var t = (A = A || {}).random || (A.rng || E)()
        if (((t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128), e)) {
          n = n || 0
          for (var o = 0; o < 16; ++o) e[n + o] = t[o]
          return e
        }
        return (function (A) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = (
              v[A[e + 0]] +
              v[A[e + 1]] +
              v[A[e + 2]] +
              v[A[e + 3]] +
              '-' +
              v[A[e + 4]] +
              v[A[e + 5]] +
              '-' +
              v[A[e + 6]] +
              v[A[e + 7]] +
              '-' +
              v[A[e + 8]] +
              v[A[e + 9]] +
              '-' +
              v[A[e + 10]] +
              v[A[e + 11]] +
              v[A[e + 12]] +
              v[A[e + 13]] +
              v[A[e + 14]] +
              v[A[e + 15]]
            ).toLowerCase()
          if (!y(n)) throw TypeError('Stringified UUID is invalid')
          return n
        })(t)
      }
      var k = function (A, e, n) {
          if (n || 2 === arguments.length)
            for (var t, o = 0, r = e.length; o < r; o++)
              (!t && o in e) ||
                (t || (t = Array.prototype.slice.call(e, 0, o)), (t[o] = e[o]))
          return A.concat(t || Array.prototype.slice.call(e))
        },
        x = (function () {
          function A(A, e, n) {
            ;(this.gameState = 'INITIALIZING'),
              (this.field = []),
              (this.startTimestamp = null),
              (this.numberOfRows = A),
              (this.numberOfCols = e),
              (this.numberOfMines = n),
              this.createField()
          }
          return (
            Object.defineProperty(A.prototype, 'timeElapsed', {
              get: function () {
                return null === this.startTimestamp
                  ? 0
                  : Date.now() - this.startTimestamp
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(A.prototype, 'cells', {
              get: function () {
                return this.field.flat()
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(A.prototype, 'flaggedCells', {
              get: function () {
                return this.field.flat().filter(function (A) {
                  return A.isFlagged
                })
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(A.prototype, 'revealedCells', {
              get: function () {
                return this.field.flat().filter(function (A) {
                  return A.isRevealed
                })
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(A.prototype, 'unrevealedCells', {
              get: function () {
                return this.field.flat().filter(function (A) {
                  return !A.isRevealed
                })
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(A.prototype, 'mines', {
              get: function () {
                return this.field.flat().filter(function (A) {
                  return A.isMine
                })
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(A.prototype, 'isWon', {
              get: function () {
                return (
                  this.mines.every(function (A) {
                    return A.isFlagged
                  }) && this.mines.length === this.flaggedCells.length
                )
              },
              enumerable: !1,
              configurable: !0,
            }),
            (A.prototype.createField = function () {
              for (var A = 0; A < this.numberOfRows; A++) {
                this.field[A] = []
                for (var e = 0; e < this.numberOfCols; e++)
                  this.field[A][e] = {
                    id: B(),
                    isMine: !1,
                    isRevealed: !1,
                    isFlagged: !1,
                    adjacentMines: 0,
                    row: A,
                    col: e,
                    index: A * this.numberOfCols + e,
                  }
              }
            }),
            (A.prototype.onFirstClick = function (A) {
              'INITIALIZING' === this.gameState &&
                ((this.gameState = 'PLAYING'),
                (this.startTimestamp = Date.now()),
                this.placeMines(A))
            }),
            (A.prototype.placeMines = function (A) {
              for (
                var e = this.field.flat().filter(function (e) {
                    return e !== A
                  }),
                  n = 0;
                n < this.numberOfMines;
                n++
              ) {
                var t = Math.floor(Math.random() * e.length),
                  o = e[t]
                ;(o.isMine = !0),
                  this.getAdjacentCells(o.row, o.col).forEach(function (A) {
                    return A.adjacentMines++
                  }),
                  e.splice(t, 1)
              }
            }),
            (A.prototype.getCellByIndex = function (A) {
              var e = Math.floor(A / this.numberOfCols),
                n = A % this.numberOfCols
              return this.field[e][n]
            }),
            (A.prototype.getAdjacentCells = function (A, e, n) {
              var t = this
              void 0 === n && (n = 'block')
              var o = [
                  [A - 1, e],
                  [A, e - 1],
                  [A, e],
                  [A, e + 1],
                  [A + 1, e],
                ],
                r = k(
                  k([], o, !0),
                  [
                    [A - 1, e - 1],
                    [A - 1, e + 1],
                    [A + 1, e - 1],
                    [A + 1, e + 1],
                  ],
                  !1
                ),
                i = ('block' === n ? r : o).filter(function (A) {
                  var e = A[0],
                    n = A[1]
                  return (
                    e >= 0 && n >= 0 && e < t.numberOfRows && n < t.numberOfCols
                  )
                })
              return i.map(function (A) {
                var e = A[0],
                  n = A[1]
                return t.field[e][n]
              })
            }),
            (A.prototype.revealZeros = function (A) {
              var e = this
              ;(A.isRevealed = !0),
                this.getAdjacentCells(A.row, A.col, 'cross').forEach(function (
                  A
                ) {
                  0 !== A.adjacentMines ||
                    A.isRevealed ||
                    A.isFlagged ||
                    e.revealZeros(A)
                })
            }),
            (A.prototype.won = function () {
              this.gameState = 'WON'
            }),
            (A.prototype.gameOver = function () {
              this.gameState = 'LOST'
            }),
            (A.prototype.revealCell = function (A) {
              var e = this.getCellByIndex(A)
              'LOST' === this.gameState ||
                'WON' === this.gameState ||
                e.isRevealed ||
                e.isFlagged ||
                (this.onFirstClick(e),
                (e.isRevealed = !0),
                e.isMine
                  ? this.gameOver()
                  : 0 === e.adjacentMines && this.revealZeros(e))
            }),
            (A.prototype.flagCell = function (A) {
              var e = this.getCellByIndex(A)
              'PLAYING' !== this.gameState ||
                e.isRevealed ||
                ((e.isFlagged = !e.isFlagged), this.isWon && this.won())
            }),
            A
          )
        })()
      const M = x
      var S = {}
      !(function A(e, n, t, o) {
        var r = !!(
          e.Worker &&
          e.Blob &&
          e.Promise &&
          e.OffscreenCanvas &&
          e.OffscreenCanvasRenderingContext2D &&
          e.HTMLCanvasElement &&
          e.HTMLCanvasElement.prototype.transferControlToOffscreen &&
          e.URL &&
          e.URL.createObjectURL
        )
        function i() {}
        function a(A) {
          var t = n.exports.Promise,
            o = void 0 !== t ? t : e.Promise
          return 'function' == typeof o ? new o(A) : (A(i, i), null)
        }
        var s,
          l,
          c,
          d,
          p,
          h,
          m,
          u,
          g,
          f =
            ((c = Math.floor(1e3 / 60)),
            (d = {}),
            (p = 0),
            'function' == typeof requestAnimationFrame &&
            'function' == typeof cancelAnimationFrame
              ? ((s = function (A) {
                  var e = Math.random()
                  return (
                    (d[e] = requestAnimationFrame(function n(t) {
                      p === t || p + c - 1 < t
                        ? ((p = t), delete d[e], A())
                        : (d[e] = requestAnimationFrame(n))
                    })),
                    e
                  )
                }),
                (l = function (A) {
                  d[A] && cancelAnimationFrame(d[A])
                }))
              : ((s = function (A) {
                  return setTimeout(A, c)
                }),
                (l = function (A) {
                  return clearTimeout(A)
                })),
            { frame: s, cancel: l }),
          w =
            ((u = {}),
            function () {
              if (h) return h
              if (!t && r) {
                var e = [
                  'var CONFETTI, SIZE = {}, module = {};',
                  '(' + A.toString() + ')(this, module, true, SIZE);',
                  'onmessage = function(msg) {',
                  '  if (msg.data.options) {',
                  '    CONFETTI(msg.data.options).then(function () {',
                  '      if (msg.data.callback) {',
                  '        postMessage({ callback: msg.data.callback });',
                  '      }',
                  '    });',
                  '  } else if (msg.data.reset) {',
                  '    CONFETTI.reset();',
                  '  } else if (msg.data.resize) {',
                  '    SIZE.width = msg.data.resize.width;',
                  '    SIZE.height = msg.data.resize.height;',
                  '  } else if (msg.data.canvas) {',
                  '    SIZE.width = msg.data.canvas.width;',
                  '    SIZE.height = msg.data.canvas.height;',
                  '    CONFETTI = module.exports.create(msg.data.canvas);',
                  '  }',
                  '}',
                ].join('\n')
                try {
                  h = new Worker(URL.createObjectURL(new Blob([e])))
                } catch (A) {
                  return (
                    void 0 !== typeof console &&
                      'function' == typeof console.warn &&
                      console.warn('🎊 Could not load worker', A),
                    null
                  )
                }
                !(function (A) {
                  function e(e, n) {
                    A.postMessage({ options: e || {}, callback: n })
                  }
                  ;(A.init = function (e) {
                    var n = e.transferControlToOffscreen()
                    A.postMessage({ canvas: n }, [n])
                  }),
                    (A.fire = function (n, t, o) {
                      if (m) return e(n, null), m
                      var r = Math.random().toString(36).slice(2)
                      return (m = a(function (t) {
                        function i(e) {
                          e.data.callback === r &&
                            (delete u[r],
                            A.removeEventListener('message', i),
                            (m = null),
                            o(),
                            t())
                        }
                        A.addEventListener('message', i),
                          e(n, r),
                          (u[r] = i.bind(null, { data: { callback: r } }))
                      }))
                    }),
                    (A.reset = function () {
                      for (var e in (A.postMessage({ reset: !0 }), u))
                        u[e](), delete u[e]
                    })
                })(h)
              }
              return h
            }),
          E = {
            particleCount: 50,
            angle: 90,
            spread: 45,
            startVelocity: 45,
            decay: 0.9,
            gravity: 1,
            drift: 0,
            ticks: 200,
            x: 0.5,
            y: 0.5,
            shapes: ['square', 'circle'],
            zIndex: 100,
            colors: [
              '#26ccff',
              '#a25afd',
              '#ff5e7e',
              '#88ff5a',
              '#fcff42',
              '#ffa62d',
              '#ff36ff',
            ],
            disableForReducedMotion: !1,
            scalar: 1,
          }
        function b(A, e, n) {
          return (function (A, e) {
            return e ? e(A) : A
          })(A && null != A[e] ? A[e] : E[e], n)
        }
        function y(A) {
          return A < 0 ? 0 : Math.floor(A)
        }
        function v(A) {
          return parseInt(A, 16)
        }
        function C(A) {
          return A.map(B)
        }
        function B(A) {
          var e = String(A).replace(/[^0-9a-f]/gi, '')
          return (
            e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
            {
              r: v(e.substring(0, 2)),
              g: v(e.substring(2, 4)),
              b: v(e.substring(4, 6)),
            }
          )
        }
        function k(A) {
          ;(A.width = document.documentElement.clientWidth),
            (A.height = document.documentElement.clientHeight)
        }
        function x(A) {
          var e = A.getBoundingClientRect()
          ;(A.width = e.width), (A.height = e.height)
        }
        function M(A, n) {
          var i,
            s = !A,
            l = !!b(n || {}, 'resize'),
            c = b(n, 'disableForReducedMotion', Boolean),
            d = r && b(n || {}, 'useWorker') ? w() : null,
            p = s ? k : x,
            h = !(!A || !d || !A.__confetti_initialized),
            m =
              'function' == typeof matchMedia &&
              matchMedia('(prefers-reduced-motion)').matches
          function u(e, n, r) {
            for (
              var s,
                l,
                c,
                d,
                h = b(e, 'particleCount', y),
                m = b(e, 'angle', Number),
                u = b(e, 'spread', Number),
                g = b(e, 'startVelocity', Number),
                w = b(e, 'decay', Number),
                E = b(e, 'gravity', Number),
                v = b(e, 'drift', Number),
                B = b(e, 'colors', C),
                k = b(e, 'ticks', Number),
                x = b(e, 'shapes'),
                M = b(e, 'scalar'),
                S = (function (A) {
                  var e = b(A, 'origin', Object)
                  return (e.x = b(e, 'x', Number)), (e.y = b(e, 'y', Number)), e
                })(e),
                z = h,
                I = [],
                R = A.width * S.x,
                L = A.height * S.y;
              z--;

            )
              I.push(
                (void 0,
                void 0,
                (l =
                  (s = {
                    x: R,
                    y: L,
                    angle: m,
                    spread: u,
                    startVelocity: g,
                    color: B[z % B.length],
                    shape:
                      x[
                        (0,
                        (d = x.length),
                        Math.floor(Math.random() * (d - 0)) + 0)
                      ],
                    ticks: k,
                    decay: w,
                    gravity: E,
                    drift: v,
                    scalar: M,
                  }).angle *
                  (Math.PI / 180)),
                (c = s.spread * (Math.PI / 180)),
                {
                  x: s.x,
                  y: s.y,
                  wobble: 10 * Math.random(),
                  wobbleSpeed: Math.min(0.11, 0.1 * Math.random() + 0.05),
                  velocity:
                    0.5 * s.startVelocity + Math.random() * s.startVelocity,
                  angle2D: -l + (0.5 * c - Math.random() * c),
                  tiltAngle: (0.5 * Math.random() + 0.25) * Math.PI,
                  color: s.color,
                  shape: s.shape,
                  tick: 0,
                  totalTicks: s.ticks,
                  decay: s.decay,
                  drift: s.drift,
                  random: Math.random() + 2,
                  tiltSin: 0,
                  tiltCos: 0,
                  wobbleX: 0,
                  wobbleY: 0,
                  gravity: 3 * s.gravity,
                  ovalScalar: 0.6,
                  scalar: s.scalar,
                })
              )
            return i
              ? i.addFettis(I)
              : (i = (function (A, e, n, r, i) {
                  var s,
                    l,
                    c = e.slice(),
                    d = A.getContext('2d'),
                    p = a(function (e) {
                      function a() {
                        ;(s = l = null),
                          d.clearRect(0, 0, r.width, r.height),
                          i(),
                          e()
                      }
                      ;(s = f.frame(function e() {
                        !t ||
                          (r.width === o.width && r.height === o.height) ||
                          ((r.width = A.width = o.width),
                          (r.height = A.height = o.height)),
                          r.width ||
                            r.height ||
                            (n(A), (r.width = A.width), (r.height = A.height)),
                          d.clearRect(0, 0, r.width, r.height),
                          (c = c.filter(function (A) {
                            return (function (A, e) {
                              ;(e.x +=
                                Math.cos(e.angle2D) * e.velocity + e.drift),
                                (e.y +=
                                  Math.sin(e.angle2D) * e.velocity + e.gravity),
                                (e.wobble += e.wobbleSpeed),
                                (e.velocity *= e.decay),
                                (e.tiltAngle += 0.1),
                                (e.tiltSin = Math.sin(e.tiltAngle)),
                                (e.tiltCos = Math.cos(e.tiltAngle)),
                                (e.random = Math.random() + 2),
                                (e.wobbleX =
                                  e.x + 10 * e.scalar * Math.cos(e.wobble)),
                                (e.wobbleY =
                                  e.y + 10 * e.scalar * Math.sin(e.wobble))
                              var n = e.tick++ / e.totalTicks,
                                t = e.x + e.random * e.tiltCos,
                                o = e.y + e.random * e.tiltSin,
                                r = e.wobbleX + e.random * e.tiltCos,
                                i = e.wobbleY + e.random * e.tiltSin
                              return (
                                (A.fillStyle =
                                  'rgba(' +
                                  e.color.r +
                                  ', ' +
                                  e.color.g +
                                  ', ' +
                                  e.color.b +
                                  ', ' +
                                  (1 - n) +
                                  ')'),
                                A.beginPath(),
                                'circle' === e.shape
                                  ? A.ellipse
                                    ? A.ellipse(
                                        e.x,
                                        e.y,
                                        Math.abs(r - t) * e.ovalScalar,
                                        Math.abs(i - o) * e.ovalScalar,
                                        (Math.PI / 10) * e.wobble,
                                        0,
                                        2 * Math.PI
                                      )
                                    : (function (A, e, n, t, o, r, i, a, s) {
                                        A.save(),
                                          A.translate(e, n),
                                          A.rotate(r),
                                          A.scale(t, o),
                                          A.arc(0, 0, 1, 0, a, void 0),
                                          A.restore()
                                      })(
                                        A,
                                        e.x,
                                        e.y,
                                        Math.abs(r - t) * e.ovalScalar,
                                        Math.abs(i - o) * e.ovalScalar,
                                        (Math.PI / 10) * e.wobble,
                                        0,
                                        2 * Math.PI
                                      )
                                  : (A.moveTo(Math.floor(e.x), Math.floor(e.y)),
                                    A.lineTo(
                                      Math.floor(e.wobbleX),
                                      Math.floor(o)
                                    ),
                                    A.lineTo(Math.floor(r), Math.floor(i)),
                                    A.lineTo(
                                      Math.floor(t),
                                      Math.floor(e.wobbleY)
                                    )),
                                A.closePath(),
                                A.fill(),
                                e.tick < e.totalTicks
                              )
                            })(d, A)
                          })),
                          c.length ? (s = f.frame(e)) : a()
                      })),
                        (l = a)
                    })
                  return {
                    addFettis: function (A) {
                      return (c = c.concat(A)), p
                    },
                    canvas: A,
                    promise: p,
                    reset: function () {
                      s && f.cancel(s), l && l()
                    },
                  }
                })(A, I, p, n, r)).promise
          }
          function g(n) {
            var t = c || b(n, 'disableForReducedMotion', Boolean),
              o = b(n, 'zIndex', Number)
            if (t && m)
              return a(function (A) {
                A()
              })
            s && i
              ? (A = i.canvas)
              : s &&
                !A &&
                ((A = (function (A) {
                  var e = document.createElement('canvas')
                  return (
                    (e.style.position = 'fixed'),
                    (e.style.top = '0px'),
                    (e.style.left = '0px'),
                    (e.style.pointerEvents = 'none'),
                    (e.style.zIndex = A),
                    e
                  )
                })(o)),
                document.body.appendChild(A)),
              l && !h && p(A)
            var r = { width: A.width, height: A.height }
            function g() {
              if (d) {
                var e = {
                  getBoundingClientRect: function () {
                    if (!s) return A.getBoundingClientRect()
                  },
                }
                return (
                  p(e),
                  void d.postMessage({
                    resize: { width: e.width, height: e.height },
                  })
                )
              }
              r.width = r.height = null
            }
            function f() {
              ;(i = null),
                l && e.removeEventListener('resize', g),
                s && A && (document.body.removeChild(A), (A = null), (h = !1))
            }
            return (
              d && !h && d.init(A),
              (h = !0),
              d && (A.__confetti_initialized = !0),
              l && e.addEventListener('resize', g, !1),
              d ? d.fire(n, r, f) : u(n, r, f)
            )
          }
          return (
            (g.reset = function () {
              d && d.reset(), i && i.reset()
            }),
            g
          )
        }
        function S() {
          return g || (g = M(null, { useWorker: !0, resize: !0 })), g
        }
        ;(n.exports = function () {
          return S().apply(this, arguments)
        }),
          (n.exports.reset = function () {
            S().reset()
          }),
          (n.exports.create = M)
      })(
        (function () {
          return 'undefined' != typeof window
            ? window
            : 'undefined' != typeof self
            ? self
            : this || {}
        })(),
        S,
        !1
      )
      const z = S.exports
      S.exports.create
      var I = (function () {
        function A(A, e, n, t) {
          ;(this.cellsHTML = []),
            (this.confettiRendered = !1),
            (this.game = A),
            (this.gameContainer = e),
            (this.numberOfMinesElement = n),
            (this.flagsElement = t)
        }
        return (
          (A.prototype.render = function () {
            switch (
              ((this.numberOfMinesElement.innerHTML =
                this.game.numberOfMines.toString()),
              (this.flagsElement.innerHTML =
                this.game.flaggedCells.length.toString()),
              this.game.gameState)
            ) {
              case 'INITIALIZING':
                0 === this.cellsHTML.length && this.renderInitializing()
                break
              case 'PLAYING':
                this.renderPlaying()
                break
              case 'LOST':
                this.renderLost()
                break
              case 'WON':
                this.renderWon()
            }
          }),
          (A.prototype.revealAll = function () {
            var A = this
            this.game.cells.forEach(function (e) {
              var n = A.cellsHTML[e.index]
              n.classList.add('revealed'),
                n.classList.remove('flagged'),
                (n.innerHTML = e.adjacentMines.toString()),
                e.isMine && (n.innerHTML = '💣')
            })
          }),
          (A.prototype.revealMines = function () {
            var A = this
            this.game.mines.forEach(function (e) {
              var n = A.cellsHTML[e.index]
              n.classList.add('revealed'),
                n.classList.remove('flagged'),
                (n.innerHTML = '💣')
            })
          }),
          (A.prototype.renderInitializing = function () {
            var A = this
            this.gameContainer.style.setProperty(
              '--cols',
              this.game.numberOfCols.toString()
            ),
              this.gameContainer.style.setProperty(
                '--rows',
                this.game.numberOfCols.toString()
              ),
              this.game.field.flat().forEach(function () {
                var e = document.createElement('div')
                e.classList.add('cell'),
                  A.gameContainer.appendChild(e),
                  A.cellsHTML.push(e)
              })
          }),
          (A.prototype.renderPlaying = function () {
            var A = this
            this.game.cells.forEach(function (e) {
              var n = A.cellsHTML[e.index]
              e.isRevealed
                ? (n.innerHTML = e.adjacentMines.toString())
                : e.isFlagged
                ? (n.innerHTML = '🚩')
                : (n.innerHTML = ''),
                n.classList.toggle('mine', e.isMine),
                n.classList.toggle('revealed', e.isRevealed),
                n.classList.toggle('flagged', e.isFlagged)
            })
          }),
          (A.prototype.renderWon = function () {
            var A, e
            if ((this.revealAll(), !this.confettiRendered)) {
              this.confettiRendered = !0
              var n = document.createElement('canvas')
              ;(n.width = document.body.clientWidth),
                (n.height = document.body.clientHeight),
                (n.className = 'confetti-canvas'),
                document.body.appendChild(n),
                null ===
                  (e =
                    null ===
                      (A = z.create(n)({ particleCount: 200, spread: 100 })) ||
                    void 0 === A
                      ? void 0
                      : A.then(function () {
                          return n.remove()
                        })) ||
                  void 0 === e ||
                  e.catch(console.error)
            }
          }),
          (A.prototype.renderLost = function () {
            this.revealAll()
          }),
          A
        )
      })()
      const R = I
      var L = {
          numberOfRows: 9,
          numberOfCols: 9,
          numberOfMines: 10,
          level: 'easy',
        },
        T = new M(L.numberOfRows, L.numberOfCols, 1),
        O = document.getElementById('gameContainer'),
        j = document.getElementById('numberOfMines'),
        F = document.getElementById('flags'),
        U = new R(T, O, j, F)
      U.render(),
        U.cellsHTML.forEach(function (A, e) {
          A.addEventListener('click', function () {
            T.revealCell(e), U.render()
          }),
            A.addEventListener('contextmenu', function (A) {
              A.preventDefault(), T.flagCell(e), U.render()
            })
        })
    })()
})()
//# sourceMappingURL=app.bundle.js.map
