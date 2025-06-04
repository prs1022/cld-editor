import { cn } from '@/lib/utils';

type StatusBarProps = {
  filePath: string;
  isDirty: boolean;
  lastSaved?: Date;
};

export default function StatusBar({ filePath, isDirty, lastSaved }: StatusBarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-t border-gray-700 text-sm">
      <div className="text-gray-400 truncate max-w-[50%]">
        {filePath || 'No file selected'}
      </div>
      <div className="flex items-center space-x-4">
        <span className={cn(
          "px-2 py-1 rounded",
          isDirty ? "bg-yellow-600 text-white" : "text-gray-400"
        )}>
          {isDirty ? 'Unsaved' : 'Saved'}
        </span>
        {lastSaved && (
          <span className="text-gray-400">
            Last saved: {new Date(lastSaved).toLocaleTimeString()}
          </span>
        )}
      </div>
    </div>
  );
}