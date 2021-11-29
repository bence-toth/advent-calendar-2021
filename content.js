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
        "According to Wikipedia, &lt;q cite='https://en.wikipedia.org<wbr>/wiki<wbr>/HTML5'&gt;HTML5 was first released in a public-facing form on 22 January 2008,[2] with a major update and W3C Recommendation status in October 2014.&lt;/q&gt;",
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
];
