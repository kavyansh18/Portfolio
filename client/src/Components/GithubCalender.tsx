import React, { useState, useEffect } from 'react';
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
  const [blockSize, setBlockSize] = useState(9); // Default block size

  // Function to filter contributions for the current year
  const transformData = (contributions: any) => {
    return contributions.filter((day: any) => {
      const date = new Date(day.date);
      return date.getFullYear() === currentYear;
    });
  };

  // Update block size based on screen size
  useEffect(() => {
    const updateBlockSize = () => {
      if (window.innerWidth < 640) {
        setBlockSize(6); 
      } else {
        setBlockSize(9); 
      }
    };
    updateBlockSize();

    window.addEventListener('resize', updateBlockSize);

    return () => window.removeEventListener('resize', updateBlockSize);
  }, []);

  return (
    <div className="github-contribution-graph">
      <h2>GitHub Contribution Graph</h2>
      <div className="year-label">{currentYear}</div>
      <div className="lg:scale-100 scale-75">
        <GitHubCalendar
          {...({
            username,
            blockSize,
            blockMargin: 3,
            color: "hsl(203, 82%, 33%)",
            fontSize: 16,
            transformData,
          } as GitHubCalendarProps)}
        />
      </div>
    </div>
  );
};

export default GithubCalender;
