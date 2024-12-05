import React, { useState, useCallback } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { debounce } from "lodash";
import { FontAwesome } from "@expo/vector-icons";

// Types
interface SearchableItem {
  id: number | string;
  [key: string]: any;
}

interface SearchProps<T extends SearchableItem> {
  data: T[]; // Array of items to search through
  searchKey: keyof T; // Key to search in each item (e.g., 'name')
  onResultsFound?: (results: T[]) => void; // Callback with filtered results
  placeholder?: string; // Custom placeholder text
  debounceMs?: number; // Custom debounce timing
  renderItem?: (item: T) => React.ReactNode; // Custom item renderer
  showResults?: boolean; // Option to show/hide results list
}

const SearchComponent = <T extends SearchableItem>({
  data,
  searchKey,
  onResultsFound,
  placeholder = "Search...",
  debounceMs = 300,
  renderItem,
  showResults = true,
}: SearchProps<T>) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<T[]>([]);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((text: string) => {
      if (!text.trim()) {
        setResults([]);
        onResultsFound?.([]);
        return;
      }

      const filtered = data.filter((item) => {
        const searchValue = String(item[searchKey]).toLowerCase();
        return searchValue.includes(text.toLowerCase());
      });

      setResults(filtered);
      onResultsFound?.(filtered);
    }, debounceMs),
    [data, searchKey, onResultsFound]
  );

  const handleSearch = (text: string) => {
    setSearchText(text);
    debouncedSearch(text);
  };

  const handleClear = () => {
    setSearchText("");
    setResults([]);
    onResultsFound?.([]);
  };

  // Default item renderer if none provided
  const defaultRenderItem = (item: T) => (
    <View className="border-b border-gray-200 p-3">
      <Text className="text-gray-800">{String(item[searchKey])}</Text>
    </View>
  );

  return (
    <View className="w-full">
      {/* Search Input */}
      <View
        className={`mb-2 overflow-hidden rounded-lg border ${
          isFocused ? "border-blue-500 bg-white" : "border-gray-200 bg-gray-50"
        }`}
      >
        <View className="flex-row items-center px-3 py-2">
          <FontAwesome
            name="search"
            size={16}
            color={isFocused ? "#3B82F6" : "#9CA3AF"}
          />
          <TextInput
            className="ml-2 flex-1 text-base text-gray-900"
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF"
            value={searchText}
            onChangeText={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={handleClear}>
              <FontAwesome name="times-circle" size={16} color="#9CA3AF" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Search Status */}
      {searchText.trim() && (
        <Text className="mb-2 text-sm text-gray-600">
          {results.length === 0
            ? "No results found"
            : `Found ${results.length} result${
                results.length === 1 ? "" : "s"
              }`}
        </Text>
      )}

      {/* Results List */}
      {showResults && searchText.trim() && results.length > 0 && (
        <View className="mt-2 rounded-lg border border-gray-200 bg-white">
          {results.map((item) => (
            <View key={item.id}>
              {renderItem ? renderItem(item) : defaultRenderItem(item)}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default SearchComponent;
