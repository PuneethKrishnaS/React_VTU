export default function BasicFigure({source,caption}) {
  return (
    <div>
      <img src={source} alt={caption} width={100} height={100} />
    </div>
  )
}
