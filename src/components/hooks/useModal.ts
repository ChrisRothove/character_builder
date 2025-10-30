/* eslint-disable react-hooks/exhaustive-deps */
import { ModalAction } from "@app-types/modalActions";
import { createContext, useCallback, useMemo, useState } from "react";

type ModalConfig = {
  title: string;
  subtitle?: string;
  actions: Array<ModalAction>;
};

const DEFAULT_CONFIG: ModalConfig = {
  title: "woops",
  subtitle: "If you're seeing this I really fucked up.",
  actions: [
    {
      label: "Close",
      function: () => {},
    },
  ],
};

type ModalContextData = {
  isOpen: boolean;
  openModal: (newConfig: ModalConfig) => void;
  closeModal: () => void;
  config: ModalConfig;
};

export default function useModal() {
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState<ModalConfig>(DEFAULT_CONFIG);

  const openModal = useCallback((newConfig: ModalConfig) => {
    const configWithAutoClose = { ...newConfig };
    configWithAutoClose.actions = newConfig.actions.map((action) => {
      return {
        ...action,
        function: () => {
          action.function();
          closeModal();
        },
      };
    });
    setConfig(configWithAutoClose);
    setOpen(true);
  }, []);

  const closeModal = () => setOpen(false);

  const modalData = useMemo(
    () => ({
      isOpen: open,
      openModal,
      closeModal,
      config,
    }),
    [config, open]
  );
  const ModalContext = createContext<ModalContextData>(modalData);

  return {
    ModalContext,
    modalData,
  };
}
