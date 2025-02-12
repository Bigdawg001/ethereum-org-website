import { createIconBase } from "@/components/icons/icon-base"

export const EthTokenIconGrayscale = createIconBase({
  displayName: "EthTokenIconGrayscale",
  viewBox: "0 0 30 30",
  className: "text-3xl/none",
  children: (
    <>
      <circle cx="15" cy="15" r="15" fill="white" />
      <path
        d="M20.87 15.1868L14.9371 5L9 15.1868L14.9371 18.8115L20.87 15.1868Z"
        fill="var(--eth-colors-primary-action)"
      />
      <path
        d="M14.9996 25L20.9366 16.3523L14.9996 19.977L9.0625 16.3523L14.9996 25Z"
        fill="var(--eth-colors-primary-action)"
      />
    </>
  ),
})
