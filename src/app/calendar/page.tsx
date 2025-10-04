// app/dashboard/calendar/page.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Bell, Clock, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils'; // For conditional class application
import Link from 'next/link';

// Helper component for a single date detail item
const DateDetail = ({
  icon: Icon,
  label,
  date,
  isDeadline = false,
}: {
  icon: React.ComponentType<React.HTMLAttributes<SVGElement>>;
  label: string;
  date: string;
  isDeadline?: boolean;
}) => (
  <div className="flex items-center space-x-2">
    <Icon className={cn('h-4 w-4', isDeadline ? 'text-red-500 dark:text-red-400' : 'text-muted-foreground')} />
    <div>
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className={cn('text-sm font-semibold', isDeadline && 'text-red-500 dark:text-red-400')}>
        {date}
      </p>
    </div>
  </div>
);

// Helper component for a single exam card
const ExamCard = ({
  title,
  year,
  status,
  statusColor,
  dates,
  link,
}: {
  title: string;
  year: number;
  status: string;
  statusColor: string;
  dates: {
    notification: string;
    formStart: string;
    lastDate: string;
    exam: string;
  };
  link?: string;
}) => {
  const isRegistrationOpen = status === 'Registration Open';
  
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow border dark:border-gray-700">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="text-xl font-bold">
            {title} {year}
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Stay updated with all important dates
          </p>
        </div>
        <Badge
  className={cn('text-sm font-semibold px-3 py-1 rounded-full', statusColor as string)}
>
  {status}
</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Date Grid - Responsive layout */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 border-t pt-4 dark:border-gray-700">
          <DateDetail icon={Bell} label="Notification Date" date={dates.notification} />
          <DateDetail icon={Clock} label="Form Start Date" date={dates.formStart} />
          <DateDetail icon={Calendar} label="Last Date to Apply" date={dates.lastDate} isDeadline={true} />
          <DateDetail icon={Calendar} label="Exam Date" date={dates.exam} />
        </div>

        {isRegistrationOpen && (
          <Link href={link || '#'} passHref legacyBehavior>
            <a className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-3">
              Apply Now
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default function UPSCExamCalendarPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <Calendar className="w-8 h-8 text-primary" />
        <h1 className="text-2xl font-bold">UPSC Exam Calendar 2026</h1>
      </div>

      <div className="space-y-6">
        {/* UPSC CSE Prelims 2026 */}
        <ExamCard
          title="UPSC CSE Prelims"
          year={2026}
          status="Upcoming"
          statusColor="bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-100"
          dates={{
            notification: '10 Feb 2026',
            formStart: '15 Feb 2026',
            lastDate: '15 Mar 2026',
            exam: '24 May 2026',
          }}
        />

        {/* UPSC CDS I 2026 */}
        <ExamCard
          title="UPSC CDS I"
          year={2026}
          status="Registration Open"
          statusColor="bg-green-500 text-white hover:bg-green-600 dark:bg-green-600"
          dates={{
            notification: '1 Dec 2025',
            formStart: '10 Dec 2025',
            lastDate: '10 Jan 2026',
            exam: '14 Feb 2026',
          }}
          link="/apply/cds"
        />

        {/* UPSC NDA I 2026 */}
        <ExamCard
          title="UPSC NDA I"
          year={2026}
          status="Upcoming"
          statusColor="bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-100"
          dates={{
            notification: '15 Dec 2025',
            formStart: '20 Dec 2025',
            lastDate: '20 Jan 2026',
            exam: '18 Apr 2026',
          }}
        />
      </div>
    </div>
  );
}