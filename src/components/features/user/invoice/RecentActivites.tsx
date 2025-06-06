"use client";

import { useState } from "react";
import Link from "next/link";
import { formatTimeAgo } from "@/utils/timeUtils";
import { ActivityEvent } from "@/types/activity";
import { ChevronRight, Mail } from "lucide-react";
import Image from "next/image";

interface RecentActivityProps {
  events: ActivityEvent[];
  maxDisplay?: number;
}

export default function RecentActivity({
  events,
  maxDisplay = 3,
}: RecentActivityProps) {
  const [displayCount, setDisplayCount] = useState(maxDisplay);
  const displayedEvents = events.slice(0, displayCount);

  const getEventIcon = (type: ActivityEvent["type"]) => {
    switch (type) {
      case "INVOICE_PAID":
        return (
          <div className="h-10 w-10 rounded-full flex items-center justify-center">
            <Image
              alt="Checkmark"
              src="/icons/Overlay.png"
              width={30}
              height={30}
            />
          </div>
        );
      case "INVOICE_CREATED":
        return (
          <div className="h-10 w-10 rounded-full flex items-center justify-center">
            <Image
              alt="Checkmark"
              src="/icons/Overlay (1).png"
              width={30}
              height={30}
            />
          </div>
        );
      case "PAYMENT_REMINDER_SENT":
        return (
          <div className="h-10 w-10 rounded-full flex items-center justify-center">
            <Image
              alt="Checkmark"
              src="/icons/Overlay (2).png"
              width={30}
              height={30}
            />
          </div>
        );
    }
  };

  const getEventTitle = (type: ActivityEvent["type"]) => {
    switch (type) {
      case "INVOICE_PAID":
        return "Invoice Paid";
      case "INVOICE_CREATED":
        return "Invoice Created";
      case "PAYMENT_REMINDER_SENT":
        return "Payment Reminder Sent";
    }
  };

  const getEventDescription = (event: ActivityEvent) => {
    switch (event.type) {
      case "INVOICE_PAID":
        return `${event.invoiceNumber} was paid by ${event.clientName}`;
      case "INVOICE_CREATED":
        return `New invoice ${event.invoiceNumber} was created for ${event.clientName}`;
      case "PAYMENT_REMINDER_SENT":
        return `Reminder sent to ${event.clientName} for ${event.invoiceNumber}`;
    }
  };

  return (
    <div className="w-full rounded-lg p-6 bg-[#de73ff09] border border-gray-800  shadow-sm shadow-[#FFFFFF1A]">
      <div className="mb-2">
        <h2 className="text-[17.16px] font-semibold text-white">
          Recent Activity
        </h2>
        <p className="text-[#FFFFFF99] text-[13.56px]">
          Latest invoice actions
        </p>
      </div>

      <div className="space-y-6 mt-6">
        {displayedEvents.length > 0 ? (
          displayedEvents.map((event) => (
            <div key={event.id} className="flex items-start gap-4">
              <div className="flex-shrink-0">{getEventIcon(event.type)}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-[15.38px]">
                  {getEventTitle(event.type)}
                </h3>
                <p className="text-[#FFFFFF99] text-[13.67px]">
                  {getEventDescription(event)}
                </p>
              </div>
              <div className="flex-shrink-0 text-[11.81px] text-[#FFFFFF66]">
                {formatTimeAgo(event.timestamp)}
              </div>
            </div>
          ))
        ) : (
          <p className="text-[13.67px] text-[#FFFFFF99] py-4 text-center">
            No recent activity
          </p>
        )}
      </div>

      {events.length >= maxDisplay && (
        <div className="mt-8 text-center">
          <Link
            href="/activity"
            className="inline-flex items-center text-[13.67px] text-[#FFFFFF99] hover:text-white"
          >
            View All Activity
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
