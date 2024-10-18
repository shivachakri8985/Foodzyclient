import React, { useEffect, useState } from "react";
import { API_URL } from "../api";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { RotatingLines } from "react-loader-spinner";

const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [scrollPostion, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);

  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newData = await response.json();
      setVendorData(newData);
      setLoading(false);
    } catch (error) {
      alert("failed to fetch data");
      console.error("failed to fetch data");
      setLoading(true);
    }
  };

  useEffect(() => {
    vendorFirmHandler();
  }, []);

  const handleScroll = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 500;
    if (direction === "left") {
      gallery.scrollTo({
        left: gallery.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    } else if (direction === "right") {
      gallery.scrollTo({
        left: gallery.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mediaChainSection">
      <div className="loaderSection">
        {loading && (
          <>
            <div className="loader">Loading..</div>
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </>
        )}
      </div>
      <div className="btnSection">
        <button onClick={() => handleScroll("left")}>
          <GoArrowLeft />
        </button>
        <button onClick={() => handleScroll("right")}>
          <GoArrowRight />
        </button>
      </div>
      <h3>Top restaurants chains in Silchar</h3>
      <section
        className="chainSection"
        id="chainGallery"
        onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
      >
        {vendorData.vendors &&
          vendorData.vendors.map((vendor) => {
            return (
              <>
                <div className="vendorBox">
                  {vendor.firm.map((item) => {
                    return (
                      <>
                        <div className="firmImage">
                          <img src={`${API_URL}/uploads/${item.image}`} />
                          <div>{item.firmName}</div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
      </section>
    </div>
  );
};

export default Chains;
