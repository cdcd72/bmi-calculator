import { useState } from 'react';
import styled from 'styled-components';

import Button from '@/ui/Button';
import InputGroup from '@/ui/InputGroup';
import Label from '@/ui/Label';
import NumericInput from '@/ui/NumericInput';
import Title from '@/ui/Title';
import Column from '@/ui/layout/Column';
import Container from '@/ui/layout/Container';
import Row from '@/ui/layout/Row';

const StyledCalculator = styled(Container)`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem;
  max-width: 48rem;
  width: 100%;
`;

const ResultContainer = styled.div`
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-md);
  padding: 2.4rem;
  margin-top: 2.4rem;
  text-align: center;
`;

const BmiValue = styled.div`
  font-size: 3.6rem;
  font-weight: 700;
  color: var(--color-grey-800);
  margin-bottom: 1.2rem;
`;

const BmiCategory = styled.div<{ $category: string }>`
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0.8rem 1.6rem;
  border-radius: var(--border-radius-sm);

  ${({ $category }) => {
    switch ($category) {
      case '過輕':
        return `
          color: var(--color-indigo-700);
          background-color: var(--color-indigo-100);
        `;
      case '正常體重':
        return `
          color: var(--color-green-700);
          background-color: var(--color-green-100);
        `;
      case '過重':
        return `
          color: var(--color-orange-700);
          background-color: var(--color-orange-100);
        `;
      case '肥胖':
        return `
          color: var(--color-red-700);
          background-color: var(--color-red-100);
        `;
      default:
        return `
          color: var(--color-grey-700);
          background-color: var(--color-grey-100);
        `;
    }
  }}
`;

function BmiCalculator() {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBmi = () => {
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (heightNum > 0 && weightNum > 0) {
      const bmiValue = weightNum / Math.pow(heightNum / 100, 2);
      setBmi(Number(bmiValue.toFixed(1)));
    }
  };

  const getBmiCategory = (bmiValue: number): string => {
    if (bmiValue < 18.5) return '過輕';
    if (bmiValue >= 18.5 && bmiValue < 24) return '正常體重';
    if (bmiValue >= 24 && bmiValue < 27) return '過重';
    return '肥胖';
  };

  return (
    <StyledCalculator>
      <Title>BMI 計算機</Title>

      <Row>
        <Column>
          <InputGroup>
            <Label htmlFor="height">身高 (公分)</Label>
            <NumericInput
              id="height"
              placeholder="請輸入身高"
              value={height}
              onChange={setHeight}
              min={30}
              max={300}
              decimals={1}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="weight">體重 (公斤)</Label>
            <NumericInput
              id="weight"
              placeholder="請輸入體重"
              value={weight}
              onChange={setWeight}
              min={0.5}
              max={500}
              decimals={1}
            />
          </InputGroup>

          <Button onClick={calculateBmi}>計算 BMI</Button>

          {bmi !== null && (
            <ResultContainer>
              <BmiValue>{bmi}</BmiValue>
              <BmiCategory $category={getBmiCategory(bmi)}>
                {getBmiCategory(bmi)}
              </BmiCategory>
            </ResultContainer>
          )}
        </Column>
      </Row>
    </StyledCalculator>
  );
}

export default BmiCalculator;
