"use client";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { useSession } from "@/lib/auth-client";
import {
  Briefcase,
  Persons,
  Thunderbolt,
  CircleCheck,
} from "@gravity-ui/icons";
import React from "react";

const RecruiterPage = () => {
  const { data: session, isPending } = useSession();
  if (isPending) {
    return <div>Loading...</div>;
  }

  const recruiterStats = [
    { title: "Total Job Posts", value: "48", icon: Briefcase },
    { title: "Total Applicants", value: "1,284", icon: Persons },
    { title: "Active Jobs", value: "18", icon: Thunderbolt },
    { title: "Jobs Closed", value: "32", icon: CircleCheck },
  ];

  const user = session?.user;

  return (
    <div className="text-5xl mt-10">
      <h2 className="mb-10 ml-10">Welcome back, {user?.name}</h2>
      <DashboardStats statsData={recruiterStats} />
    </div>
  );
};

export default RecruiterPage;
