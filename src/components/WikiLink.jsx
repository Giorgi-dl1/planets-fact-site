export default function WikiLink({ name }) {
  return (
    <div className="text-[12px] pointer-events-auto flex gap-1 justify-center opacity-50 md:justify-start">
      <span>Source: </span>
      <span className="flex gap-1">
        <a
          href={`https://en.wikipedia.org/wiki/${name}`}
          target="_blank"
          rel="noreferrer"
          className="underline font-bold"
        >
          Wikipedia
        </a>
        <img src="/assets/icon-source.svg" alt="source icon" />
      </span>
    </div>
  )
}
