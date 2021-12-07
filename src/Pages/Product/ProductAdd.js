import React, { useState, useRef, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const ProductAdd = () => {
  const inputSelectRef = useRef(null);
  const [inputSelectCategory, setInputSelectCategory] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchCategories, setSearchCategories] = useState("");
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} alt="" />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  const [product, setProduct] = useState({
    name: "",
    qty: "",
    pricing: "",
    category: "",
  });

  useEffect(() => {
    const handleClick = (e) => {
      if (!inputSelectRef.current.contains(e.target)) {
        setInputSelectCategory(!inputSelectCategory);
      }
    };

    if (inputSelectCategory) {
      window.addEventListener("click", handleClick);
    }

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [inputSelectCategory]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/category`)
      .then(function (response) {
        setCategories(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleClickCategory = (e) => {
    const category = e.target.innerText;
    setProduct({ ...product, category: category });
    setSearchCategories(category);
  };

  const filterCategory = categories.filter((category) => {
    return category.category
      .toLowerCase()
      .includes(searchCategories.toLowerCase());
  });

  return (
    <div>
      {/* header */}
      <div className="p-8 flex items-center justify-between bg-white rounded shadow">
        {/* page title */}
        <div>
          <h4 className="text-2xl font-bold">Add Product</h4>
        </div>
        {/* right menu */}
        <div className="flex gap-x-3"></div>
      </div>
      {/* section */}
      <div className="my-8 bg-white rounded  shadow">
        {/* title */}
        <div className="rounded-t overflow-hidden">
          <p className="px-8 py-4 bg-gray-100 text-base font-semibold">
            Product Information
          </p>
        </div>
        {/* content */}
        <div className="pt-8 pb-16 px-16 grid lg:grid-cols-2 gap-y-5 gap-x-14">
          {/* left */}
          <div>
            <form className="flex flex-col gap-y-3">
              <div>
                <label htmlFor="productname">Product Name</label>
                <input
                  className="_input"
                  type="text"
                  placeholder="Product Name"
                  id="productname"
                />
              </div>
              <div>
                <label htmlFor="qty">Qty</label>
                <input
                  className="_input"
                  type="number"
                  placeholder="Qty"
                  id="qty"
                />
              </div>
              <div>
                <label htmlFor="pricing">Pricing</label>
                <input
                  className="_input"
                  type="number"
                  placeholder="Pricing"
                  id="pricing"
                />
              </div>
              <div className="relative">
                <label>
                  Category ({" "}
                  <span className="cursor-pointer text-indigo-500">
                    click here
                  </span>{" "}
                  to manage category )
                </label>
                <input
                  className="_input"
                  type="text"
                  placeholder="Search category..."
                  id="category"
                  onClick={() => {
                    setInputSelectCategory(!inputSelectCategory);
                  }}
                  ref={inputSelectRef}
                  value={searchCategories}
                  autoComplete="off"
                  onChange={(e) => setSearchCategories(e.target.value)}
                />
                <div className="absolute right-4 bottom-3 text-lg text-gray-400">
                  <MdIcons.MdOutlineKeyboardArrowDown />
                </div>
                {inputSelectCategory && (
                  <div className="absolute w-full max-h-40 overflow-y-auto mt-3 bg-white shadow rounded">
                    {filterCategory.map((category, index) => {
                      return (
                        <div
                          className="hover:bg-indigo-400 p-3 hover:text-white cursor-pointer"
                          onClick={handleClickCategory}
                          key={index}
                        >
                          {category.category}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </form>
          </div>
          {/* right */}
          <div className="grid content-end">
            <div className="w-full mx-auto">
              <div
                className="w-full mb-8 py-8 flex flex-col items-center justify-center border border-dashed border-indigo-700 rounded-lg"
                {...getRootProps()}
              >
                <div className="w-52 mb-5">{thumbs}</div>
                {files.length === 0 && (
                  <>
                    <div className="mb-5 text-indigo-700 text-7xl">
                      <AiIcons.AiOutlineCloudUpload />
                    </div>
                    <p className="text-base font-normal tracking-normal text-gray-800 dark:text-gray-100 text-center">
                      Drag and drop here
                    </p>
                    <p className="text-base font-normal tracking-normal text-gray-800 dark:text-gray-100 text-center my-1">
                      or
                    </p>
                  </>
                )}
                <label
                  htmlFor="fileUp"
                  className="cursor-pointer text-base font-normal tracking-normal text-indigo-700 dark:text-indigo-600 text-center"
                >
                  Browse
                </label>
                <input {...getInputProps()} />
              </div>
            </div>
            {/* action */}
            <div className="flex gap-3">
              <Link
                to="/products"
                className="w-1/2 px-5 py-3 text-center bg-gray-200 text-indigo-700 rounded hover:bg-gray-300 transition duration-150 ease-in-out"
              >
                Cancel
              </Link>
              <button className="w-1/2 px-5 py-3 bg-indigo-700 text-white rounded hover:bg-indigo-600 transition-duration-150 ease-in-out">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
