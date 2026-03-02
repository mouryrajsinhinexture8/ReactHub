import styles from "../../css/Landing/TrendingComponent.module.css";

type Props = {
  title: string;
  description: string;
  category: string;
  likes: number;
  comments: number;
};

function TrendingComponentCard( {title,description,category,likes,comments,}: Props) 
{
  return (
    <div className={`${styles.card} rounded-xl p-6 border`} style={{ borderColor: "var(--border-primary)" }}>
      {/* Category Badge */}
      <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
        {category}
      </span>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>

      {/* Bottom Row */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex gap-4">
          <span>♡ {likes}</span>
          <span>💬 {comments}</span>
        </div>

        <button className="font-medium hover:underline">
          View
        </button>
      </div>
    </div>
  );
}

export default TrendingComponentCard;