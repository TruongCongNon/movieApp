const TVShowInfo = ({ TVShowInfo }) => {
  console.log({ TVShowInfo });
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>

      <div className="mb-4">
        <p className="font-bold">Original Title </p>
        <p>{TVShowInfo.original_name}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country </p>
        {(TVShowInfo.origin_country || []).map((countryCode) => (
          <img
            src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
            key={countryCode}
            className="mr-1 mt-1 w-[1.4vw]"
          />
        ))}
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{TVShowInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Network</p>
        <p>
          {(TVShowInfo.networks || [])
            .map((net) => (
              <img
                key={net.id}
                src={`https://media.themoviedb.org/t/p/h30${net.logo_path}`}
                className="invert"
              />
            ))
            .slice(0, 1)}
        </p>
      </div>
    </div>
  );
};
export default TVShowInfo;
