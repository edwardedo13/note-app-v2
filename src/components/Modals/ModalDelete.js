import { Button, Center, Group, Modal, Stack, Text } from "@mantine/core";
import PropTypes from "prop-types";
import React from "react";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "../../utils/local-data";

function ModalDelete({ isOpen, onClose, id }) {
  let navigate = useNavigate();
  const handleDeleteNote = (id) => {
    deleteNote(id);
    navigate("/", { replace: true });
    onClose();
  };
  return (
    <Modal opened={isOpen} withCloseButton={false} onClose={onClose} centered>
      <Stack py={"sm"} px="md">
        <Center>
          <TiDelete size={"3rem"} color="red" />
        </Center>
        <Text align="center">
          Apakah anda yakin ingin menghapus catatan ini?
        </Text>
        <Group position="center">
          <Button onClick={onClose} color="blue">
            Tidak
          </Button>
          <Button
            color={"red"}
            onClick={() => {
              handleDeleteNote(id);
            }}
          >
            Ya
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}

ModalDelete.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ModalDelete;