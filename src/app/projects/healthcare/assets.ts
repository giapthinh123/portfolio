const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const healthcareAssets = {
  heroProduct: `${basePath}/healthcare/thum.png`,
  demoVideo: `${basePath}/healthcare/VMEC_Healthcare_AI.mp4`,
  demoPoster: `${basePath}/healthcare/thum.png`,
  slides: `${basePath}/healthcare/VMEC%20Healthcare%20Slide.pdf`,
  solutionScreens: {
    needs: null,
    booking: null,
    navigation: null,
  },
} as const;
