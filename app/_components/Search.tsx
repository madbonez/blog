export function Search() {
  return (
    <div>
      <div className={`flex justify-between w-full mb-4`}>
        <h3 className={`text-color-subtitle`}>Публикации</h3>
        <small className={`text-color-span`}>6 публикаций</small>
      </div>
      <input
        className={`
        w-full
        bg-color-input
        border-color-label 
        border-2
        rounded-lg
        h-12
        p-4
        outline-none
        focus:ring-color-blue 
        focus:border-color-blue
        text-color-label
        text-sm    
        placeholder-color-label
        `}
        placeholder={`поиск`}
      />
    </div>
  );
}
