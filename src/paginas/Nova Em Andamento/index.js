import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { theme } from "../../Global/styles/theme.js";
import database from "../../config/firebaseconfig.js";
import styles from "./style";
import Botao from "../Tarefa/Botao.js";
import { ListDivider } from "../../components/ListDivider";

export default function NovaEmAndamento({ navigation }, props) {
  const [descricao, setDescricao] = useState(null);
  const [titulo, setTitulo] = useState(null);

  function addTarefa() {
      database.collection("Em Andamento").add({
        descricao: descricao,
        titulo: titulo,
        status: false,
      });
      navigation.navigate("Anotações em Andamento");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Tarefa Em Andamento</Text>
      <ListDivider/>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: estudar javascript"
        onChangeText={setTitulo}
        value={titulo}
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Ver as aulas"
        onChangeText={setDescricao}
        value={descricao}
      />

      <Botao
        antIconName="check"
        style={{
          backgroundColor: "#00AEEF",
          position: "absolute",
          right: 15,
          bottom: 50,
          zIndex: 1,
        }}
        onPress={() => {
          addTarefa();
        }}
      />
    </View>
  );
}