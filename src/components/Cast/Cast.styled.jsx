import styled from 'styled-components';

export const CastSection = styled.section`
  padding: 1rem 0rem;
`;

export const CastImageWrapp = styled.div`
  background-size: cover;
  width: 160px;
  height: 220px;
`;

export const CastImage = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid #797979;
  border-radius: 5px;
  margin-bottom: 5px;
  display: block;
`;

export const CastListWrapp = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  align-items: stretch;
  justify-content: start;
`;

export const CastListItem = styled.li`
  max-width: 160px;
`;

export const TextWrapp = styled.div`
  padding-top: 3px;
`;

export const Text = styled.p`
  max-width: 160px;
  font-size: 12px;
  color: inherit;
`;

export const TextAccent = styled.span`
  font-weight: 700;
  font-size: 12px;
  padding-bottom: 3px;
`;
