import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function DetailsLaboratory() {
  const labId = useParams();
  const [labDetails, setLabDetails] = useState(null);
  const labData = useSelector((state) => state.labs.labs);
  useEffect(() => {
    console.log(labId.id, labData);

    setLabDetails(labData); // Fetch labs (from localStorage or JSON)
  }, []);
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
      <h2 className="text-xl font-semibold">Lab Details</h2>
      <div className="space-y-2">
        {/* Laboratory Name */}
        <div className="flex items-center">
          <span className="font-bold text-gray-700 mr-2">Name:</span>
          <span className="text-gray-900">{labDetails?.laboratoryName}</span>
        </div>

        {/* City */}
        <div className="flex items-center">
          <span className="font-bold text-gray-700 mr-2">City:</span>
          <span className="text-gray-900">{labDetails?.city}</span>
        </div>

        {/* Cluster */}
        <div className="flex items-center">
          <span className="font-bold text-gray-700 mr-2">Cluster:</span>
          <span className="text-gray-900">{labDetails?.cluster}</span>
        </div>

        {/* Available Equipment */}
        <div className="flex items-center">
          <span className="font-bold text-gray-700 mr-2">
            Available Equipment:
          </span>
          <span className="text-gray-900">
            {labDetails?.availableEquipment?.split(",")?.map((item, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 px-2 py-1 rounded-full text-sm text-gray-800 mr-2"
              >
                {item?.trim()}
              </span>
            ))}
          </span>
        </div>

        {/* Fuel Oil Parameters */}
        <div>
          <h3 className="font-bold text-gray-700 mb-2">
            Fuel Oil Testing Parameters
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-bold text-gray-700">Viscosity:</span>{" "}
              <span className="text-gray-900">
                {Number(labDetails?.viscosity)}
              </span>
            </div>
            <div>
              <span className="font-bold text-gray-700">Sulfur Content:</span>{" "}
              <span className="text-gray-900">
                {parseFloat(labDetails?.sulfurContent)}
              </span>
            </div>
            <div>
              <span className="font-bold text-gray-700">Water Content:</span>{" "}
              <span className="text-gray-900">
                {parseFloat(labDetails?.waterContent)}
              </span>
            </div>
            <div>
              <span className="font-bold text-gray-700">Flash Point:</span>{" "}
              <span className="text-gray-900">
                {parseFloat(labDetails?.flashPoint)}
              </span>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center">
          <span className="font-bold text-gray-700 mr-2">Status:</span>
          <span
            className={`px-2 py-1 rounded-full text-sm ${
              labDetails?.status === "Live"
                ? "bg-green-200 text-green-800"
                : labDetails?.status === "Under Maintenance"
                ? "bg-yellow-200 text-yellow-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {labDetails?.status}
          </span>
        </div>
      </div>
    </div>
  );
}
