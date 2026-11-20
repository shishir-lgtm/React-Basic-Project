Topics Covered

1. Lighthouse
2. Performance

3. Lighthouse

Lighthouse ==> tells overall performance of our website it's like as auditor, it runs emulator to test the website and it slows down the network activity to catch how website is behaving when network is slow.

2.  Performance

Performance ==> it tells why anything is slow as it records the user interaction and this is the place who tells how many times any component is rendering.

It's connected with Lighthouse but both serve different purpose:

- Lighthouse tells what is slow.
- Performance tells why and the exact location of culprit.

3. In React Application We See Website Performance in 2 Parts

1. Content (img, txt, media)
1. How components are rendering

Let's discuss them one by one.

3.1 Content Optimization

3.1.1 Images

Images can be optimize by answering one question: Is it LCP or not?

If not, lazy load it.
Use srcset or sizes (both together won't work).
These things are in control of us. Resolution is something which client puts by its own and we can't do much about that.

3.1.2 Text

Text is part of HTML so if it's have its font size then its sorted.

3.2 How Components Are Re-Rendering

3.2.1 Component Re-Rendering

Most of the time this our website gets slower because of mismanagement of re-rendering.

3.2.2 Performance Tab

Performance tab answers this question.

Inside the Performance tab we have blocking metric and interaction metric as well. From there we can find in detail how many times any interaction is rendering related things.

3.2.3 Finding Issues Before Code

Till point 1 to 7 we haven't talked about the code part of the website. We are just finding the issue and its root cause.

---

4.  Important Metrics of Website

If I talk about the imp metrics of website so it is:

- TTFB
- FCP
- LCP
- INP
- CLS

The first metric which browser trigger is TTFB (it measures how much time server is taking to respond).

If this higher then FCP would go up ==> so LCP and so ==> overall performance.

So we should make sure that server is fast enough to respond.

4.1 First Contentful Paint (FCP)

FCP ==> it's the first visible content of our website, and in most of cases it's text not any image.

But we need to make sure that browser should not download the extra JS bundles.

So with the CSS it also has to be well optimized and for text most imp CSS is font size and respective things.

4.2. Largest Contentful Paint (LCP)

LCP ==> mostly images are LCP.

So in totality it increase two more metrics after TTFB:

1. Resource delay.
2. Download delay.
3. Total rendering time of LCP.

4.3 Resource Delay

The time taken in search of the URL link of the image.

So don't lazy load the LCP element, prefetch it and aggressive download it.

4.4. Download Delay

The time taken to download the resources.

Here size, resolution matters.

14. Total Rendering Time of LCP

Total rendering time of LCP.

15. Interaction to Next Paint (INP)

INP is related with user interaction (have discussed in performance in detail).

16. Cumulative Layout Shift (CLS)

CLS is mostly related with CSS.

---

Summary

In React website we examine performance on 2 things:

1. Content.
2. Component rendering.

Content optimization is something which is pretty straightforward. We have standard methods to optimize them.

Rendering management is something which don't have straightforward way. It depends on multiple factors. This is where thinking of developer is tested.
