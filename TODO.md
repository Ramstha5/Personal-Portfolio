# Performance Optimization TODO

## Approved Plan Steps (from Performance Analysis)

### Phase 1: Quick Wins (Images & CSS)
- [x] 1.1 Optimize global CSS transitions/shadows in src/App.css
- [x] 1.2 Simplify heavy effects in src/components/SpinnerImage.module.css
- [x] 1.3 Add lazy loading to key sections via React.lazy in src/routes/Home.jsx (better fit)
- [x] 1.4 Update Vite config + package.json for compression (vite-plugin-compression)

### Phase 2: Images & Fonts
- [ ] 2.1 Convert PNGs to WebP (manual: Elma.png, portfolio-og.png; update refs)
- [ ] 2.2 Self-host fonts (download Poppins WOFF2 to public/fonts/, update index.html)
- [ ] 2.3 Replace spinner.gif with optimized WebP/AVIF if animated

### Phase 3: Full CSS Audit
- [x] 3.1 Scan/edit all .module.css files to reduce excessive transitions/blurs (Projects.module.css, Experience.module.css, etc.)

### Phase 4: Testing
- [ ] 4.1 `npm run build` && Lighthouse/PageSpeed test
- [ ] 4.2 Test mobile FPS/animations
- [ ] 4.3 Complete (attempt_completion)

**Current Progress**: Starting Phase 1...

**Next**: User approves each step before edits.

