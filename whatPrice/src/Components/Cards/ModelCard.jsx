import "./style.css";
function ModelCard({ specs, modelName }) {
  const rearCamera = specs?.MainCameraDetails?.mainCameraTriple;
  const selfieCamera = specs?.SelfieCameraDetails?.selfieCameraSingle;
  // Expression for Extracting Number Values from camera Detail
  const mpRegex = /(\d+)\s*MP/g;

  // Extract the Number Values of Rear Camera Pixels
  const rearCameraMatches = rearCamera?.match(mpRegex) || [];
  const rearPixesl = rearCameraMatches.map((match) =>
    match.replace(/\s*MP/, "MP" + "/")
  );
  // Extract the Number values of Selfie Camera Pixels
  const frontCameraMatches = selfieCamera?.match(mpRegex) || [];
  const frontPixels = frontCameraMatches.map((match) =>
    match.replace(/\s*MP/, "MP")
  );

  return (
    <>
      <div className="text-white">
        <h1 className="text-3xl font-bold my-6 ml-6">{modelName}</h1>
        <div className="top-specs flex m-2 gap-8 items-center">
          <div className="mobile-images h-96 rounded-lg  w-5/12 flex justify-center items-center">
            <img
              src={specs?.phoneDetails?.image}
              alt=""
              className="h-full object-contain cursor-pointer"
            />
          </div>
          <div className="top-details flex flex-col gap-3 mt-3 ml-3 w-7/12">
            <div className="modelName">
              <h1 className="text-2xl font-bold">{}</h1>
            </div>
            <div className="price flex gap-8 items-center">
              <div className="border-2 rounded py-2 px-3">
                <img
                  width={15}
                  src="./svgicons/price.svg"
                  alt=""
                  className="invert cursor-pointer"
                />
              </div>
              <h3>{specs?.MiscDetails?.miscPrice}</h3>
            </div>
            <div className="memory flex gap-8 items-center">
              <div className="border-2 rounded py-2 px-3">
                <img
                  width={15}
                  src="./svgicons/storage.svg"
                  alt=""
                  className="invert cursor-pointer"
                />
              </div>
              <h1>{specs?.MemoryDetails?.memoryInternal}</h1>
            </div>
            <div className="camera flex gap-8 items-center">
              <div className="border-2 rounded py-2 px-3">
                <img
                  width={15}
                  src="./svgicons/camera.svg"
                  alt=""
                  className="invert cursor-pointer"
                />
              </div>
              <div className="flex flex-col">
                <h1>Rear Camera: {rearPixesl}</h1>
                <h1>Front Camera: {frontPixels}</h1>
              </div>
            </div>
            <div className="processor flex gap-8 items-center">
              <div className="border-2 rounded py-2 px-3">
                <img
                  width={15}
                  src="./svgicons/processor.svg"
                  alt=""
                  className="invert cursor-pointer"
                />
              </div>
              <h1>{specs?.PlatformDetails?.platformChipset}</h1>
            </div>
            <div className="display flex gap-8 items-center">
              <div className="border-2 rounded py-2 px-3">
                <img
                  width={15}
                  src="./svgicons/display.svg"
                  alt=""
                  className="invert cursor-pointer"
                />
              </div>
              <h1>{specs?.DisplayDetails?.displayResolution}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="detailed-specs flex ml-6 mt-6">
        <div className="flex flex-col w-11/12 md:w-4/5 bg-slate-100">
          <div className="network flex flex-col items-center">
            <h1 className="w-full px-1 text-xl font-bold bg-slate-300 flex gap-3 py-1">
              <img
                src="./specsicon/network.svg"
                alt=""
                width={30}
                className="ms-4"
              />
              Network
            </h1>
            <table className="w-full">
              <tbody>
                {Object.entries(specs?.NetworkDetails || {}).map(
                  ([key, value], index) => (
                    <tr key={index} className="border-b-2">
                      <td className="py-1 ps-3 w-2/4">
                        {key.slice(7, key.length)}
                      </td>
                      <td className="w-2/4">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="body">
            <h1 className="w-full px-1 text-xl font-bold bg-slate-300 flex gap-3 py-1">
              <img
                src="./specsicon/display.svg"
                alt=""
                width={30}
                className="ms-4"
              />
              Body
            </h1>
            <table className="w-full">
              <tbody>
                {Object.entries(specs?.BodyDetails || {}).map(
                  ([key, value], index) => (
                    <tr key={index} className="border-b-2">
                      <td className="py-1 ps-3 w-2/4">
                        {key.slice(4, key.length)}
                      </td>
                      <td className="py-1 w-2/4">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="display">
            <h1 className="w-full px-1 text-xl font-bold bg-slate-300 flex gap-3 py-1">
              <img
                src="./specsicon/display-size.svg"
                alt=""
                width={30}
                className="ms-4"
              />
              Display
            </h1>
            <table className="w-full">
              <tbody>
                {Object.entries(specs?.DisplayDetails || {}).map(
                  ([key, value], index) => (
                    <tr key={index} className="border-b-2">
                      <td className="py-1 ps-3 w-2/4">
                        {key.slice(7, key.length)}
                      </td>
                      <td className="py-1 w-2/4">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="platform">
            <h1 className="w-full px-1 text-xl font-bold bg-slate-300 flex gap-3 py-1">
              <img
                src="./specsicon/processor.svg"
                alt=""
                width={30}
                className="ms-4"
              />
              Processor
            </h1>
            <table className="w-full">
              <tbody>
                {Object.entries(specs?.PlatformDetails || {}).map(
                  ([key, value], index) => (
                    <tr key={index} className="border-b-2">
                      <td className="py-1 ps-3 w-2/4">
                        {key.slice(8, key.length)}
                      </td>
                      <td className="py-1 w-2/4">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="storage">
            <h1 className="w-full px-1 text-xl font-bold bg-slate-300 flex gap-3 py-1">
              <img
                src="./specsicon/memory.svg"
                alt=""
                width={20}
                className="ms-4"
              />
              Memory
            </h1>
            <table className="w-full">
              <tbody>
                {Object.entries(specs?.MemoryDetails || {}).map(
                  ([key, value], index) => (
                    <tr key={index} className="border-b-2">
                      <td className="py-1 ps-3 w-2/4">
                        {key.slice(6, key.length)}
                      </td>
                      <td className="py-1 w-2/4">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="camera">
            <h1 className="w-full px-1 text-xl font-bold bg-slate-300 flex gap-3 py-1">
              <img
                src="./specsicon/cameras.svg"
                alt=""
                width={30}
                className="ms-4"
              />
              Camera
            </h1>
            <table className="w-full">
              <tbody>
                {Object.entries(specs?.MainCameraDetails || {}).map(
                  ([key, value], index) => (
                    <tr key={index} className="border-b-2">
                      <td className="py-1 ps-3 w-2/4">
                        {key.slice(10, key.length)}
                      </td>
                      <td className="py-1 w-2/4">
                        {value.split("\n").map((line, idx) => (
                          <div key={idx}>{line}</div>
                        ))}
                      </td>
                    </tr>
                  )
                )}

                <tr>
                  <td className="py-1 ps-3 w-2/4">Selfie Camera</td>
                  <td className="py-1 w-2/4">
                    {specs?.SelfieCameraDetails?.selfieCameraSingle}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sound">
            <h1 className="w-full px-1 text-xl font-bold bg-slate-300 flex gap-3 py-1">
              <img
                src="./specsicon/volume.svg"
                alt=""
                width={20}
                className="ms-4"
              />
              Sound
            </h1>
            <table className="w-full">
              <tbody>
                {Object.entries(specs?.SoundDetails || {}).map(
                  ([key, value], index) => (
                    <tr key={index} className="border-b-2">
                      <td className="py-1 ps-3 w-2/4">
                        {key.slice(5, key.length)}
                      </td>
                      <td className="py-1 w-2/4">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="communication">
            <h1 className="w-full px-1 text-xl font-bold bg-slate-300 flex gap-3 py-1">
              <img
                src="./specsicon/connectivity.svg"
                alt=""
                width={20}
                className="ms-4"
              />
              Communication
            </h1>
            <table className="w-full">
              <tbody>
                {Object.entries(specs?.CommunicationsDetails || {}).map(
                  ([key, value], index) => (
                    <tr key={index} className="border-b-2">
                      <td className="py-1 ps-3 w-2/4">
                        {key.slice(14, key.length)}
                      </td>
                      <td className="py-1 w-2/4">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="features">
            <h1 className="w-full px-1 text-xl font-bold bg-slate-300 flex gap-3 py-1">
              <img
                src="./specsicon/features.svg"
                alt=""
                width={20}
                className="ms-4"
              />
              Features
            </h1>
            <table className="w-full">
              <tbody>
                {Object.entries(specs?.FeaturesDetails || {}).map(
                  ([key, value], index) => (
                    <tr key={index} className="border-b-2">
                      <td className="py-1 ps-3 w-2/4">
                        {key.slice(0, 1).toUpperCase() +
                          key.slice(1, 7) +
                          key.slice(-1)}
                      </td>
                      <td className="py-1 w-2/4">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="battery">
            <h1 className="w-full px-1 text-xl font-bold bg-slate-300 flex gap-3 py-1">
              <img
                src="./specsicon/battery1.svg"
                alt=""
                width={20}
                className="ms-4"
              />
              Battery
            </h1>
            <table className="w-full">
              <tbody>
                {Object.entries(specs?.BatteryDetails || {}).map(
                  ([key, value], index) => (
                    <tr key={index} className="border-b-2">
                      <td className="py-1 ps-3 w-2/4">
                        {key.slice(7, key.length)}
                      </td>
                      <td className="py-1 w-2/4">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="tests">
            <h1 className="w-full px-1 text-xl font-bold bg-slate-300 flex gap-3 py-1">
              <img
                src="./specsicon/performance.svg"
                alt=""
                width={20}
                className="ms-4"
              />
              Performance
            </h1>
            <table className="w-full">
              <tbody>
                {Object.entries(specs?.TestsDetails || {}).map(
                  ([key, value], index) => (
                    <tr key={index} className="border-b-2">
                      <td className="py-1 ps-3 w-2/4">
                        {key.slice(5, key.length)}
                      </td>
                      <td className="py-1 w-2/4">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="misc">
            <h1 className="w-full px-1 text-xl font-bold bg-slate-300 flex gap-3 py-1">
              <img
                src="./specsicon/battery1.svg"
                alt=""
                width={20}
                className="ms-4"
              />
              Misc
            </h1>
            <table className="w-full">
              <tbody>
                {Object.entries(specs?.MiscDetails || {}).map(
                  ([key, value], index) => (
                    <tr key={index} className="border-b-2">
                      <td className="py-1 ps-3 w-2/4">
                        {key.slice(4, key.length)}
                      </td>
                      <td className="py-1 w-2/4">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModelCard;
