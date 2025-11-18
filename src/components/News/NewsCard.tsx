"use client";
import "./NewsCard.css";

interface Props {
  title: string;
  date: string;
  link: string;
}

export default function NewsCard({ title, date, link }: Props) {
  return (
    <a
      className="news-card"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="notiglow"></div>
      <div className="notiborderglow"></div>

      <div className="notititle">{date}</div>
      <div className="notibody">{title}</div>
    </a>
  );
}

