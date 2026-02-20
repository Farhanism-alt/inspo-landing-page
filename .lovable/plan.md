

## Bring Back the Dot Background

### Problem
The content wrapper `<div>` has `bg-background` which applies a solid near-white background, completely covering the `DotBackground` canvas sitting behind it. The dots are rendering but are invisible because the opaque wrapper is painted on top.

### Fix

**File: `src/pages/Index.tsx`**

Remove `bg-background` from the content wrapper div, keeping only `relative z-10` for the stacking context. This makes the wrapper transparent so the dots show through, while individual sections and cards retain their own backgrounds.

```
Before:  <div className="min-h-screen bg-background relative z-10">
After:   <div className="min-h-screen relative z-10">
```

This single change restores dot visibility while the `relative z-10` still ensures all content (cards, FAQ, Footer) renders above the canvas layer, solving the original overlap issue.

