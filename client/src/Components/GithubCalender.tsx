import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import '../Components/UI/GitHubContributionGraph.css';

interface GitHubContributionGraphProps {
  username: string;
}

interface GitHubCalendarProps {
  username: string;
  blockSize: number;
  blockMargin: number;
  color: string;
  fontSize: number;
  transformData: (contributions: any) => any;
}

const GithubCalender: React.FC<GitHubContributionGraphProps> = ({ username }) => {
  const currentYear = new Date().getFullYear();

  // Function to filter contributions for the current year
  const transformData = (contributions: any) => {
    return contributions.filter((day: any) => {
      const date = new Date(day.date);
      return date.getFullYear() === currentYear;
    });
  };

  return (
    <div className="github-contribution-graph">
      <h2>GitHub Contribution Graph</h2>
      <div className="year-label">{currentYear}</div>
      <GitHubCalendar
        {...({
          username,
          blockSize: 9,
          blockMargin: 3,
          color: "hsl(203, 82%, 33%)",
          fontSize: 16,
          transformData,
        } as GitHubCalendarProps)}
      />
    </div>
  );
};

export default GithubCalender;