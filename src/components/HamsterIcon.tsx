type Props = {
  type: 1 | 2 | 3 | 4
  size?: number
}

export default function HamsterIcon({ type, size = 40 }: Props) {
  return (
    <img
      src={`/images/hamsters/ham${type}.png`}
      alt={`Hamster ${type}`}
      className="inline-block rounded-full drop-shadow-md"
      style={{ width: size, height: size }}
    />
  )
} 