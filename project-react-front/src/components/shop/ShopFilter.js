import React from "react";
import {
  Header,
  SectionHeader,
  SectionForm,
  StyleImput,
  StyleSelect,
  ItsImg,
} from "./styledShopFilter";
import Logo from "../../img/logo.png";

export const ShopFilter = ({
  minPrice,
  handleMinPriceChange,
  maxPrice,
  handleMaxPriceChange,
  search,
  handleSearchChange,
  sortOrder,
  handleSortOrderChange,
  cartItems,
}) => {
  return (
    <Header>
      <ItsImg src={Logo} alt="LOJA REACT " />
      <SectionHeader>
        <SectionForm>
          <label htmlFor="minimo">
            <p>Valor mínimo:</p>
          </label>
          <StyleImput
            type={"number"}
            id="minimo"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <label htmlFor="maximo">
            <p>Valor máximo:</p>
          </label>
          <StyleImput
            type={"number"}
            id="maximo"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
          <label htmlFor="name">
            <p>Nome:</p>
          </label>
          <StyleImput
            id="name"
            type="text"
            placeholder="Pesquisar Produto"
            value={search}
            onChange={handleSearchChange}
          />
          <label htmlFor="order">
            <p>Ordenar:</p>
          </label>
          <StyleSelect
            id="order"
            value={sortOrder}
            onChange={handleSortOrderChange}>
            <option value="">Ordenar por Preço</option>
            <option value="asc">Preço: Menor para Maior</option>
            <option value="desc">Preço: Maior para Menor</option>
          </StyleSelect>
        </SectionForm>
        <button>
          <span role="img" aria-label="cart">
            🛒
          </span>
          {<span>{cartItems.length}</span>}
        </button>
      </SectionHeader>
    </Header>
  );
};
