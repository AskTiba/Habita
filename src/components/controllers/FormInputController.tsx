import { View, TextInput, TextInputProps } from "react-native";
import React from "react";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { ThemedText } from "../ThemedText";

type FormInputControllerProps = {
  control: Control;
  errors?: FieldErrors<FieldValues>;
  name: string;
  placeHolder: string;
  props?: TextInputProps;
};

export default function FormInputController({
  control,
  errors,
  name,
  placeHolder,
  props,
}: FormInputControllerProps) {
  const hasError = errors && errors[name];

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeHolder}
            className={`border p-3 rounded-lg mt-4 w-11/12 ${
              hasError ? "border-red-700" : "border-mintcream"
            }`}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            {...props}
          />
        )}
      />
      {hasError && (
        <ThemedText className="text-red-700 mt-1 text-[13px]">
          {errors[name]?.message}
        </ThemedText>
      )}
    </>
  );
}
