export default ({ member, handleClose }) => {
  return (
    <dialog open>
      <article>
        <button
          style={{ marginTop: "1px" }}
          aria-label="Close"
          rel="prev"
          onClick={handleClose}
        ></button>
        <div style={{ display: "flex", gap: "1rem" }}>
          <img
            style={{ width: "200px" }}
            src={`images/${member.slug}.svg`}
            alt={member.name}
          />
          <hgroup>
            <h1>{member.name}</h1>
            <p>{member.bio}</p>
          </hgroup>
        </div>
      </article>
    </dialog>
  );
};
