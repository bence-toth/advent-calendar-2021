const content = [
  {
    // Day #1
    title: "Target dark mode in CSS",
    body: `
      <p>In Media Queries Level 5, CSS has introduced a media feature called <code>prefers-color-scheme</code> which will help you detect whether the browser's system is operating in dark mode or not, and let you tweak styles based on this.</p>
      <p>You can use it like any other media query:</p>
      <pre><code>${[
        "body {",
        "  background-color: hsl(0, 0%, 95%);",
        "  color: hsl(0, 0%, 5%);",
        "}",
        "",
        "@media (prefers-color-scheme: dark) {",
        "  body {",
        "    background-color: hsl(0, 0%, 5%);",
        "    color: hsl(0, 0%, 95%);",
        "  }",
        "}",
      ].join("\n")}</code></pre>
      <p>You can also use the value <code>light</code> and design your site dark-first:</p>
      <pre><code>${[
        "body {",
        "  background-color: hsl(0, 0%, 5%);",
        "  color: hsl(0, 0%, 95%);",
        "}",
        "",
        "@media (prefers-color-scheme: light) {",
        "  body {",
        "    background-color: hsl(0, 0%, 95%);",
        "    color: hsl(0, 0%, 5%);",
        "  }",
        "}",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #2
    title: "Use fewer but smarter selectors",
    body: `
      <p>The <code>:not()</code> pseudo-selector in combination with other selectors has an amazing use case which will help you tidy up your CSS code.</p>
      <p>For example in some cases you would like to give some margin to all list items, except for the last one using two selectors:</p>
      <pre><code>${[
        "ul.myList > li {",
        "  margin-bottom: 1em;",
        "}",
        "",
        "ul.myList > li:last-child {",
        "  margin-bottom: 0;",
        "}",
        "",
      ].join("\n")}</code></pre>
      <p>Instead, you could combine <code>:not()</code> and <code>:last-child</code> and do it all in one go:</p>
      <pre><code>${[
        "ul.myList > li:not(:last-child) {",
        "  margin-bottom: 1em;",
        "}",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #3
    title: "Credit where credit is due",
    body: `
      <p>Did you know that the <code>blockquote</code> and <code>q</code> elements support an attribute called <code>cite</code>?</p>
      <p>Using this, you can refer to the document you are quoting from using its URL:</p>
      <pre><code>${[
        "&lt;blockquote cite='https://en.wikipedia.org<wbr>/wiki<wbr>/Front-end_web_development'&gt;",
        "  Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.",
        "&lt;/blockquote&gt;",
        "",
        "According to Wikipedia, &lt;q cite='https://en.wikipedia.org<wbr>/wiki<wbr>/HTML5'&gt;HTML5 was first released in a public-facing form on 22 January 2008, with a major update and W3C Recommendation status in October 2014.&lt;/q&gt;",
      ].join("\n")}</code></pre>
      <p>This practice will help search engines understand your content better, and even help your SEO.</p>
      <p>Additionally, there is a HTML element called <code>cite</code>, which is used for the title of the work you were citing. You can use this in combination with the <code>blockquote</code> element, and if you feel fancy, you can even wrap it in a <code>figure</code>. While the <code>cite</code> element does not support the <code>cite</code> property, you can put an anchor link inside:</p>
      <pre><code>${[
        "&lt;figure&gt;",
        "  &lt;blockquote cite='https://en.wikipedia.org<wbr>/wiki<wbr>/HTML5'&gt;",
        "    &lt;p&gt;HTML5 includes detailed processing models to encourage more interoperable implementations; it extends, improves, and rationalizes the markup available for documents and introduces markup and application programming interfaces (APIs) for complex web applications.&lt;/p&gt;",
        "  &lt;/blockquote&gt;",
        "  &lt;figcaption&gt;",
        "    From the page",
        "    &lt;cite&gt;",
        "      &lt;a href='https://en.wikipedia.org<wbr>/wiki<wbr>/HTML5'&gt;",
        "        HTML5",
        "      &lt;/a&gt;",
        "    &lt;/cite&gt;",
        "    on Wikipedia",
        "  &lt;/figcaption&gt;",
        "&lt;/figure&gt;",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #4
    title: "Reduce motion",
    body: `
      <p>In Media Queries Level 5, CSS has introduced a media feature called <code>prefers-reduced-motion</code> which will help you detect if the user has requested that you avoid unnecessary animations.</p>
      <p>Your users may want to opt out of non-essential motion for a variety of reasons. For example people with vestibular motion disorders or OCD might have difficulties using your site when things are moving around. Others might just feel that it is easier to focus on the task at hand when they are not distracted by your delightful animations. Either way, respecting their choices is the right thing to do.</p>
      <p>You can use <code>prefers-reduced-motion</code> like any other media query:</p>
      <pre><code>${[
        "button {",
        "  background-color: hsl(0, 0%, 95%);",
        "  color: hsl(0, 0%, 5%);",
        "  transition: background-color 0.5s;",
        "}",
        "",
        "button:hover, button:focus {",
        "  background-color: hsl(0, 0%, 85%);",
        "}",
        "",
        "@media (prefers-reduced-motion) {",
        "  button {",
        "    transition-property: none;",
        "  }",
        "}",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #5
    title: "Beyond console.log",
    body: `
      <p>If you are a fellow <code>console.log</code> enthusiast, you might be delighted to learn a few new tricks.</p>
      <p>When logging a single variable in the console, instead of labeling your <code>console.log</code> statements with a string, you can put your variable inside an object:</p>
      <pre><code>${[
        "// Instead of",
        "console.log('myVariable', myVariable)",
        "",
        "// you can simply do",
        "console.log({myVariable})",
      ].join("\n")}</code></pre>
      <p>If you want to log something in the console when a certain condition is met, you can use the <code>console.assert</code> statement:</p>
      <pre><code>${[
        "// Instead of",
        "if (myVariable > 10) {",
        "  console.log('myVariable', myVariable)",
        "}",
        "",
        "// you can simply do",
        "console.assert(myVariable > 10, myVariable)",
      ].join("\n")}</code></pre>
      <p>Finally, when printing arrays or objects in the console, you can use <code>console.table</code>, which will print the variable in a very easy to read format. It works nicely with non-flat objects and arrays.</p>
      <pre><code>${[
        "// Instead of",
        "console.log(myArray)",
        "console.log(myObject)",
        "",
        "// you can simply do",
        "console.table(myArray)",
        "console.table(myObject)",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #6
    title: "The ternary operator",
    body: `
      <p>When you want to conditionally assign a value, instead of an <code>if</code> statement, the ternary operator could come in handy.</p>
      <pre><code>${[
        "// Instead of",
        "let myVariable;",
        "if (condition) {",
        "  myVariable = 'then value'",
        "}",
        "else {",
        "  myVariable = 'else value'",
        "}",
        "",
        "// you can simply do",
        "const myVariable = condition ? 'then value' : 'else value'",
      ].join("\n")}</code></pre>
      <p>The same thing works in any expression:</p>
      <pre><code>${[
        "// Instead of",
        "if (condition) {",
        "  myDiv.style.width = '200px'",
        "}",
        "else {",
        "  myDiv.style.width = '800px'",
        "}",
        "",
        "// you can simply do",
        "myDiv.style.width = condition ? '200px' : '800px'",
      ].join("\n")}</code></pre>
      <p>You can even use it to conditionally access one object property or another:</p>
      <pre><code>${[
        "// Instead of",
        "if (condition) {",
        "  myDiv.classList.add('hidden')",
        "}",
        "else {",
        "  myDiv.classList.remove('hidden')",
        "}",
        "",
        "// you can simply do",
        "myDiv.classList[condition ? 'add' : 'remove']('hidden')",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #7
    title: "Inline and block shorthands",
    body: `
      <p>In CSS, if you want to set the margin or padding value of an element to the same value on the top and the bottom, or on the left and the right, you can use the <code>margin-block</code>, <code>margin-inline</code>, <code>padding-block</code>, <code>padding-inline</code> properties respectively:</p>
      <pre><code>${[
        "/* Instead of */",
        ".myElement {",
        "  margin-top: 10px;",
        "  margin-bottom: 10px;",
        "}",
        "",
        "/* you can simply do */",
        ".myElement {",
        "  margin-block: 10px;",
        "}",
        "",
        "/* Instead of */",
        ".myElement {",
        "  margin-left: 10px;",
        "  margin-right: 10px;",
        "}",
        "",
        "/* you can simply do */",
        ".myElement {",
        "  margin-inline: 10px;",
        "}",
        "",
        "/* Instead of */",
        ".myElement {",
        "  padding-top: 10px;",
        "  padding-bottom: 10px;",
        "}",
        "",
        "/* you can simply do */",
        ".myElement {",
        "  padding-block: 10px;",
        "}",
        "",
        "/* Instead of */",
        ".myElement {",
        "  padding-left: 10px;",
        "  padding-right: 10px;",
        "}",
        "",
        "/* you can simply do */",
        ".myElement {",
        "  padding-inline: 10px;",
        "}",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #8
    title: "CSS inset property",
    body: `
      <p>In CSS, if you want to set the top, bottom, left, and right properties of an element to the same value, you can use the <code>inset</code> property:</p>
      <pre><code>${[
        "/* Instead of */",
        ".myElement {",
        "  position: absolute;",
        "  top: 0;",
        "  right: 0;",
        "  bottom: 0;",
        "  left: 0;",
        "}",
        "",
        "/* you can simply do */",
        ".myElement {",
        "  position: absolute;",
        "  inset: 0;",
        "}",
      ].join("\n")}</code></pre>
      <p>It is also possible to set the four values separately, similarly to the margin or padding shorthand:</p>
      <pre><code>${[
        "/* Instead of */",
        ".myElement {",
        "  position: absolute;",
        "  top: 10px;",
        "  right: 0;",
        "  bottom: 10px;",
        "  left: 0;",
        "}",
        "",
        "/* you can simply do */",
        ".myElement {",
        "  position: absolute;",
        "  inset: 10px 0;",
        "}",
        "",
        "/* Instead of */",
        ".myElement {",
        "  position: absolute;",
        "  top: 10px;",
        "  right: 20px;",
        "  bottom: 30px;",
        "  left: 40px;",
        "}",
        "",
        "/* you can simply do */",
        ".myElement {",
        "  position: absolute;",
        "  inset: 10px 20px 30px 40px;",
        "}",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #9
    title: "CSS text decoration features",
    body: `
      <p>In CSS, you can use the <code>text-decoration</code> property for text underlines, which is typically used on links. Did you know that you can also do overline and strike-through using the same feature? You can even combine them:</p>
      <pre><code>${[
        ".overline {",
        "  text-decoration: overline;",
        "}",
        "",
        ".strikeThrough {",
        "  text-decoration: line-through;",
        "}",
        "",
        ".lineAboveAndBelow {",
        "  text-decoration: underline overline;",
        "}",
      ].join("\n")}</code></pre>
      <p>Additionally, it is possible to specify the thickness, color, and style of the line:</p>
      <pre><code>${[
        ".customLine {",
        "  text-decoration: underline;",
        "  text-decoration-color: red;",
        "  text-decoration-style: wavy;",
        "  text-decoration-thickness: 3px;",
        "}",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #10
    title: "Targeting viewport aspect ratio in CSS",
    body: `
      <p>There is a CSS media feature called <code>aspect-ratio</code> which can be used to target the aspect ratio of the viewport. Similarly to <code>width</code> and <code>height</code>, it is also possible to target minimum and maximum aspect ratios:</p>
      <pre><code>${[
        "@media (aspect-ratio: 1 / 1) {",
        "  /* Exactly a square */",
        "}",
        "",
        "@media (min-aspect-ratio: 1 / 1) {",
        "  /* Landscape orientation */",
        "}",
        "",
        "@media (max-aspect-ratio: 1 / 1) {",
        "  /* Portrait orientation */",
        "}",
        "",
        "@media (min-aspect-ratio: 10 / 11) and (max-aspect-ratio: 11 / 10) {",
        "  /* Pretty close to a square */",
        "}",
        "",
        "@media (min-aspect-ratio: 16 / 9) {",
        "  /* A full-screen 16:9 video will have space on the sides */",
        "}",
        "",
        "@media (max-aspect-ratio: 16 / 9) {",
        "  /* A full-screen 16:9 video will have space on the top and the bottom */",
        "}",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #11
    title: "aspect-ratio CSS property",
    body: `
      <p>There is a CSS property called <code>aspect-ratio</code> which will help you set the width of an element relative to its height, or vice versa.</p>
      <p>If you set the <code>aspect-ratio</code> and the <code>width</code> properties, the height of the element will be calculated based on the aspect ratio. Similarly, if you set the <code>aspect-ratio</code> and the <code>height</code> properties, the aspect ratio will determine the width of the element:</p>
      <pre><code>${[
        ".tvScreen {",
        "  width: 400px;",
        "  aspect-ratio: 16 / 9;",
        "}",
        "",
        ".phoneScreen {",
        "  height: 80vh;",
        "  aspect-ratio: 9 / 16;",
        "}",
        "",
        ".square {",
        "  width: 50%;",
        "  aspect-ratio: 1 / 1;",
        "}",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #12
    title: "The &lt;picture&gt; HTML element",
    body: `
      <p>You can use the <code>&lt;picture&gt;</code> HTML element to make an image on you page have different sources depending on various properties of the browser and the device, including:</p>
      <ul>
        <li>image format support</li>
        <li>image width</li>
        <li>device pixel density</li>
        <li>media features</li>
      </ul>
      <p>If you want to use <code>webp</code> images, which is not supported by some browsers, you can use a <code>source</code> element with the <code>type</code> attribute, and provide a fallback image using a different format:</p>
      <pre><code>${[
        "&lt;picture&gt;",
        "  &lt;source srcset='logo.webp' type='image/webp' /&gt;",
        "  &lt;img src='logo.png' alt='logo' /&gt;",
        "&lt;/picture&gt;",
      ].join("\n")}</code></pre>
      <p>If you want to use an image of higher resolution on screens with higher pixel density, you can use a <code>source</code> element with the <code>type</code> attribute, and provide a fallback image:</p>
      <pre><code>${[
        "&lt;picture&gt;",
        "  &lt;source srcset='logo-big.png 1.5x' /&gt;",
        "  &lt;img src='logo.png' alt='logo' /&gt;",
        "&lt;/picture&gt;",
      ].join("\n")}</code></pre>
      <p>You can even use multiple image sources with different pixel densities on the same <code>source</code> element:</p>
      <pre><code>${[
        "&lt;picture&gt;",
        "  &lt;source srcset='logo-big.png 1.5x, logo-huge.png 2x' /&gt;",
        "  &lt;img src='logo.png' alt='logo' /&gt;",
        "&lt;/picture&gt;",
      ].join("\n")}</code></pre>
      <p>Similarly, to use an image of lower resolution when the image on the page is smaller, you can once again use a <code>source</code> element with the <code>type</code> attribute:</p>
      <pre><code>${[
        "&lt;picture&gt;",
        "  &lt;source srcset='logo-tiny.png 80w, logo.png 120w' /&gt;",
        "  &lt;img src='logo.png' alt='logo' /&gt;",
        "&lt;/picture&gt;",
      ].join("\n")}</code></pre>
      <p>You can also use the <code>media</code> attribute to target media features:</p>
      <pre><code>${[
        "&lt;picture&gt;",
        "  &lt;source srcset='logo-dark.gif' media='(prefers-color-scheme: dark)' /&gt;",
        "  &lt;source srcset='logo-print.png' media='(print)' /&gt;",
        "  &lt;source srcset='logo-still.png' media='(prefers-reduced-motion)' /&gt;",
        "  &lt;img src='logo.gif' alt='logo' /&gt;",
        "&lt;/picture&gt;",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #13
    title: "Simplified media query syntax targeting viewport width",
    body: `
      <p>CSS media queries level 4 introduced a less verbose syntax for targeting viewport width (and height). It is called range context, and it works like the following:</p>
      <pre><code>${[
        "/* Old syntax */",
        "@media (min-width: 800px) {",
        "  ...",
        "}",
        "",
        "/* Level 4 syntax */",
        "@media (800px <= width) {",
        "  ...",
        "}",
        "",
        "/* Old syntax */",
        "@media (max-width: 1280px) {",
        "  ...",
        "}",
        "",
        "/* Level 4 syntax */",
        "@media (width <= 1280px) {",
        "  ...",
        "}",
      ].join("\n")}</code></pre>
      <p>You can also use both a minimum value in the same query and save an <code>and</code> rule:</p>
      <pre><code>${[
        "/* Old syntax */",
        "@media (min-width: 800px) and (max-width: 1280px) {",
        "  ...",
        "}",
        "",
        "/* Level 4 syntax */",
        "@media (800px <= width <= 1280px) {",
        "  ...",
        "}",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #14
    title: "The &lt;kbd&gt; HTML element",
    body: `
      <p>There is a seldom used semantic HTML element called <code>&lt;kbd&gt;</code> which represents keyboard input from the user. It can be used for hotkeys:</p>
      <pre><code>${[
        "&lt;p&gt;Press &lt;kbd&gt;Ctrl&lt;/kbd&gt; + &lt;kbd&gt;Shift&lt;/kbd&gt + &lt;kbd&gt;T&lt;/kbd&gt to open and close the toolbar.&lt;/p&gt;",
      ].join("\n")}</code></pre>
      <p>This is very handy and looks great when styled to looks like a keyboard button:</p>
      <pre><code>${[
        "kbd {",
        "  display: inline-block;",
        "  vertical-align: middle;",
        "  white-space: nowrap;",
        "  line-height: 1;",
        "  padding: 0.2em 0.4em;",
        "",
        "  font-size: 0.9em;",
        "  font-weight: 700;",
        "",
        "  color: hsl(0, 0%, 30%);",
        "  background-color: hsl(0, 0%, 90%);",
        "  border: 1px solid hsl(0, 0%, 80%);",
        "  border-radius: 0.25em;",
        "  box-shadow:",
        "    0 0.05em 0 hsla(0, 0%, 0%, 20%),",
        "    0 0.1em 0 hsla(0, 0%, 100%, 50%) inset;",
        "}",
      ].join("\n")}</code></pre>
      <p>However, the <code>&lt;kbd&gt;</code> element can also be used for user input other than hotkeys. If you would like to instruct the user to type something e.g. in the terminal, the <code>&lt;kbd&gt;</code> element is a perfect choice of markup:</p>
      <pre><code>${[
        "&lt;p&gt;To install this package, type &lt;kbd&gt;npm install triangle-mosaic&lt;/kbd&gt in your terminal window.&lt;/p&gt;",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #15
    title: "The &lt;output&gt; HTML element",
    body: `
      <p>We use <code>&lt;input&gt;</code> elements all the time, but did you know that there is an <code>&lt;output&gt;</code> element, too? It is used to display a result of some operation or calculation which values of <code>&lt;input&gt;</code> elements contributed to. It is also possible to reference the input elements using the <code>for</code> attribute:</p>
      <pre><code>${[
        '&lt;input id="number" type="number" value="0" /&gt;',
        '&lt;input id="percentage" type="range" value="0" min="0" max="100" /&gt;',
        "",
        '&lt;output id="result" for="number percentage"&gt;0&lt;/output&gt;',
        "",
        "&lt;script&gt;",
        '  const numberInput = document.getElementById("number");',
        '  const percentageInput = document.getElementById("percentage");',
        '  const resultOutput = document.getElementById("result");',
        "",
        "  const calculatePercentage = () =&gt; {",
        "    resultOutput.innerHTML =",
        "      (Number(numberInput.value) * Number(percentageInput.value)) / 100;",
        "  };",
        "",
        '  numberInput.addEventListener("input", calculatePercentage);',
        '  percentageInput.addEventListener("input", calculatePercentage);',
        "&lt;/script&gt;",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #16
    title: "CSS custom properties",
    body: `
      <p>CSS supports custom properties, also known as CSS variables. This is a very powerful feature which, combined with CSS media queries, can simplify your stylesheet a lot.</p>
      <p>Let's take a look at an example of how this can help you with setting font size for various screen sizes.</p>
      <pre><code>${[
        "/* Instead of overriding font size in various selectors: */",
        "p {",
        "  font-size: 14px;",
        "}",
        "",
        "ul {",
        "  font-size: 14px;",
        "  list-style-type: circle;",
        "}",
        "",
        "blockquote {",
        "  font-size: 14px;",
        "}",
        "",
        "@media (max-width: 768px) {",
        "  p {",
        "    font-size: 18px;",
        "  }",
        "  ",
        "  ul {",
        "    font-size: 18px;",
        "  }",
        "  ",
        "  blockquote {",
        "    font-size: 18px;",
        "  }",
        "}",
        "",
        "/* Override only the custom property: */",
        ":root {",
        "  --fontSize: 14px;",
        "}",
        "",
        "@media (max-width: 768px) {",
        "  :root {",
        "    --fontSize: 18px;",
        "  }",
        "}",
        "",
        "p {",
        "  font-size: var(--fontSize);",
        "}",
        "",
        "ul {",
        "  font-size: var(--fontSize);",
        "  list-style-type: circle;",
        "}",
        "",
        "blockquote {",
        "  font-size: var(--fontSize);",
        "}",
      ].join("\n")}</code></pre>
      <p>Similarly you could override colors when the browser is running in dark mode:</p>
      <pre><code>${[
        "/* Instead of overriding color in various selectors: */",
        "p {",
        "  color: hsl(0, 0%, 15%);",
        "}",
        "",
        "ul {",
        "  color: hsl(0, 0%, 15%);",
        "  list-style-type: circle;",
        "}",
        "",
        "blockquote {",
        "  color: hsl(0, 0%, 15%);",
        "}",
        "",
        "@media (prefers-color-scheme: dark) {",
        "  p {",
        "    color: hsl(0, 0%, 85%);",
        "  }",
        "  ",
        "  ul {",
        "    color: hsl(0, 0%, 85%);",
        "  }",
        "  ",
        "  blockquote {",
        "    color: hsl(0, 0%, 85%);",
        "  }",
        "}",
        "",
        "/* Override only the custom property: */",
        ":root {",
        "  --textColor: hsl(0, 0%, 15%);",
        "}",
        "",
        "@media (prefers-color-scheme: dark) {",
        "  :root {",
        "    --textColor: hsl(0, 0%, 85%);",
        "  }",
        "}",
        "",
        "p {",
        "  color: var(--textColor);",
        "}",
        "",
        "ul {",
        "  color: var(--textColor);",
        "  list-style-type: circle;",
        "}",
        "",
        "blockquote {",
        "  color: var(--textColor);",
        "}",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #17
    title: "The power of variable fonts",
    body: `
      <p>By now various variable fonts <a href="https://fonts.google.com/variablefonts#font-families" target="_blank" rel="noopener">have become available</a> to be used on the web. Most of these fonts have some properties which can be fine tuned, like font weight or italic.</p>
      <p>An interesting thing about these fonts is that transitions and animations can be used to change the font properties over time. This is a very powerful feature which can be used to create nice animation effects. For example:</p>
      <pre><code>${[
        '@import url("https://fonts.googleapis.com/css2?family=Alegreya&display=swap");',
        "",
        "h1 {",
        "  font-family: Alegreya, serif;",
        "  font-weight: 400;",
        "  transition: font-weight 0.5s;",
        "}",
        "",
        "h1:hover {",
        "  font-weight: 650;",
        "}",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #18
    title: "The inputmode attribute",
    body: `
      <p>There are various input types like <code>url</code> and <code>number</code>, but in some cases we do not want the restrictions or features they come with, but we want to help the user inputting data regardless.</p>
      <p>On <code>&lt;input&gt;</code> elements you can use the <code>inputmode</code> attribute which will control the default state of virtual keyboards on mobile devices and the input field is in focus.</p>
      <p>Possible values are:</p>
      <ul>
        <li><code>decimal</code> which will open the numbers keyboard</li>
        <li><code>numeric</code> which will open the numbers keyboard without the decimal separator</li>
        <li><code>tel</code> which will open the numbers keyboard extended by the * and # signs</li>
        <li><code>email</code> a keyboard otimised for email addresses</li>
        <li><code>url</code> a keyboard otimised for entering URLs</li>
      </ul>
      <p>For example:</p>
      <pre><code>${[
        "&lt;label&gt;Phone number&lt;/label&gt;",
        "&lt;input type='text' inputmode='tel' /&gt;",
        "",
        "&lt;label&gt;Email address&lt;/label&gt;",
        "&lt;input type='text' inputmode='email' /&gt;",
        "",
        "&lt;label&gt;Social media link&lt;/label&gt;",
        "&lt;input type='url' inputmode='url' /&gt;",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #19
    title: "The &lt;progress&gt; and &lt;meter&gt; elements",
    body: `
      <p>There are two seldom used semantic HTML elements called <code>&lt;progress&gt;</code> and <code>&lt;meter&gt;</code>, both of which represent some fractional value.</p>
      <p>The difference between them is that the <code>&lt;progress&gt;</code> element is intended specifically to show a completion of a certain task, for example pages completed in a multi-page form, or steps completed in a multi-step checkout process. Therefore the <code>&lt;progress&gt;</code> element only supports two non-global attributes, <code>max</code> and <code>value</code>, as the minimum value is always 0.</p>
      <p>For example:</p>
      <pre><code>${[
        "&lt;progress max='10' value='3'&gt;30%&lt;/progress&gt;",
      ].join("\n")}</code></pre>
      <p>On the other hand, the <code>&lt;meter&gt;</code> element is more sophisticated. It supports a range of attributes, including <code>min</code>, <code>max</code>, <code>low</code>, <code>high</code>, and <code>optimum</code>. When these attributes are set, the browser will use color coding to show if the value is preferred or not.</p>
      <p>For example:</p>
      <pre><code>${[
        "&lt;meter",
        "  min='0'",
        "  optimum='0'",
        "  low='3'",
        "  high='7'",
        "  max='10'",
        "  value='2'",
        "&gt;",
        "  3/10",
        "&lt;/meter&gt;",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #20
    title: "Grouping options in a &lt;select&gt; dropdown",
    body: `
      <p>Did you know that the <code>&lt;select&gt;</code> element can contain <code>&lt;optgroup&gt;</code> elements instead of <code>&lt;option&gt;</code> elements? These can be used to assign the options to named groups.</p>
      <p>For example:</p>
      <pre><code>${[
        "&lt;select&gt;",
        "  &lt;optgroup label='Weekdays'&gt;",
        "    &lt;option value='1'&gt;Monday&lt;/option&gt;",
        "    &lt;option value='2'&gt;Tuesday&lt;/option&gt;",
        "    &lt;option value='3'&gt;Wednesday&lt;/option&gt;",
        "    &lt;option value='4'&gt;Thursday&lt;/option&gt;",
        "    &lt;option value='5'&gt;Friday&lt;/option&gt;",
        "  &lt;/optgroup&gt;",
        "  &lt;optgroup label='Weekend'&gt;",
        "    &lt;option value='6'&gt;Saturday&lt;/option&gt;",
        "    &lt;option value='7'&gt;Sunday&lt;/option&gt;",
        "  &lt;/optgroup&gt;",
        "&lt;/select&gt;",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #21
    title: "Lesser known input types",
    body: `
      <p>There <code>type</code> attribute of the <code>&lt;input&gt;</code> element is very versatile. There are a lot of lesser known input types which can be very handy when dealing with specific data types:</p>
      <ul>
      <li><code>color</code> will render a color picker</li>
      <li><code>date</code> will render a date picker</li>
      <li><code>month</code> will render a year and month picker</li>
      <li><code>week</code> will render a year and week picker</li>
      <li><code>time</code> will render a time picker</li>
      <li><code>datetime-local</code> will render a date-time picker</li>
      <li><code>range</code> will render a slider</li>
      </ul>
      <p>For example:</p>
      <pre><code>${[
        "&lt;label&gt;Date and time of order&lt;/label&gt;",
        "&lt;input type='datetime-local' /&gt;",
        "",
        "&lt;label&gt;Expected week of delivery&lt;/label&gt;",
        "&lt;input type='week' /&gt;",
        "",
        "&lt;label&gt;Number of items&lt;/label&gt;",
        "&lt;input type='range' min='1' max='10' /&gt;",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #22
    title: "CSS backdrop-filter",
    body: `
      <p>There is a CSS property called <code>backdrop-filter</code>, which works very similarly to the <code>filter</code> property, but instead of applying the specified filters on the element, it applies it to the content below the element. With this you can create some really nice looking effects.</p>
      <p>For example you can make an element look like glass:</p>
      <pre><code>${[
        ".glass {",
        "  background: hsla(0, 0%, 100%, 25%);",
        "  backdrop-filter: blur(4px);",
        "  border: 1px solid hsla(0, 0%, 100%, 15%);",
        "}",
      ].join("\n")}</code></pre>
      <p>Or you can make the element's background look less colorful:</p>
      <pre><code>${[
        ".grayBackground {",
        "  background: hsla(0, 0%, 100%, 50%);",
        "  backdrop-filter: grayscale(0.75);",
        "}",
      ].join("\n")}</code></pre>
    `,
  },
  {
    // Day #23
    title: "Random-looking patterns using nth-child",
    body: `
      <p>There is no way in native CSS to use random values. However, if you want to create random-looking patterns, you can do some amazing work using the <code>nth-child</code> pseudo-selector.</p>
      <p>For example if you want to create a colorful stripe of fragments alternating both their width and color, you could do something like this:</p>
      <pre><code>${[
        "&lt;div class='stripe'&gt;",
        "  &lt;div&gt;&lt;/div&gt;",
        "  &lt;div&gt;&lt;/div&gt;",
        "  &lt;!-- Lots of divs here --&gt;",
        "&lt;/div&gt;",
        "&lt;style&gt;",
        "  .stripe {",
        "    height: 10px;",
        "    width: 100%;",
        "    display: flex;",
        "  }",
        "",
        "  /* Random colors */",
        "  .stripe &gt; div:nth-child(6n) {",
        "    background-color: honeydew;",
        "  }",
        "  .stripe &gt; div:nth-child(6n + 1) {",
        "    background-color: antiquewhite;",
        "  }",
        "  .stripe &gt; div:nth-child(6n + 2) {",
        "    background-color: mistyrose;",
        "  }",
        "  .stripe &gt; div:nth-child(6n + 3) {",
        "    background-color: bisque;",
        "  }",
        "  .stripe &gt; div:nth-child(6n + 4) {",
        "    background-color: burlywood;",
        "  }",
        "  .stripe &gt; div:nth-child(6n + 5) {",
        "    background-color: ivory;",
        "  }",
        "",
        "  /* Random widths */",
        "  .stripe &gt; div:nth-child(5n) {",
        "    flex-grow: 1;",
        "  }",
        "  .stripe &gt; div:nth-child(5n + 1) {",
        "    flex-grow: 4;",
        "  }",
        "  .stripe &gt; div:nth-child(5n + 2) {",
        "    flex-grow: 1;",
        "  }",
        "  .stripe &gt; div:nth-child(5n + 3) {",
        "    flex-grow: 3;",
        "  }",
        "  .stripe &gt; div:nth-child(5n + 4) {",
        "    flex-grow: 2;",
        "  }",
        "&lt;/style&gt;",
      ].join("\n")}</code></pre>
    `,
  },
];
