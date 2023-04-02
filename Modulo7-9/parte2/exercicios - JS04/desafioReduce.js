const companies = [
    {Nome:"ICBC",País:"China",Vendas:190.5,Lucro:45.8,Ativos:4914.7,ValorMercado:249.5,Ano:1945},
    {Nome:"JPMorgan Chase",País:"Estados Unidos",Vendas:136.2,Lucro:40.4,Ativos:3689.3,ValorMercado:464.8,Ano:1946},
    {Nome:"Berkshire Hathaway",País:"Estados Unidos",Vendas:245.5,Lucro:42.5,Ativos:873.7,ValorMercado:624.4,Ano:1947},
    {Nome:"China Construction Bank",País:"China",Vendas:173.5,Lucro:39.3,Ativos:4301.7,ValorMercado:210.4,Ano:1948},
    {Nome:"Saudi Arabian Oil Company (Saudi Aramco)",País:"Arábia Saudita",Vendas:229.7,Lucro:49.3,Ativos:510.3,ValorMercado:1.897,Ano:1949},
    {Nome:"Apple",País:"Estados Unidos",Vendas:294,Lucro:63.9,Ativos:354.1,ValorMercado:2.252,Ano:1950},
    {Nome:"Bank of America",País:"Estados Unidos",Vendas:98.8,Lucro:17.9,Ativos:2832.2,ValorMercado:336.3,Ano:1951},
    {Nome:"Ping An Insurance Group",País:"China",Vendas:169.1,Lucro:20.8,Ativos:1453.8,ValorMercado:211.2,Ano:1952},
    {Nome:"Agricultural Bank of China",País:"China",Vendas:153.9,Lucro:31.3,Ativos:4159.9,ValorMercado:140.1,Ano:1953},
    {Nome:"Amazon",País:"Estados Unidos",Vendas:386.1,Lucro:21.3,Ativos:321.2,ValorMercado: 1.711,Ano:1954},
    {Nome:"Samsung Electronics",País:"Coreia do Sul",Vendas:200.7,Lucro:22.1,Ativos:348.2,ValorMercado:510.5,Ano:1955},
    {Nome:"Toyota Motor",País:"Japão",Vendas:249.4,Lucro:14.3,Ativos:561.9,ValorMercado:219.2,Ano:1956},
    {Nome:"Alphabet",País:"Estados Unidos",Vendas:182.4,Lucro:40.3,Ativos:319.6,ValorMercado:1.538,Ano:1957},
    {Nome:"Bank of China",País:"China",Vendas:134,Lucro:27.9,Ativos:3731.4,ValorMercado:116.7,Ano:1958},
    {Nome:"Microsoft",País:"Estados Unidos",Vendas:153.3,Lucro:51.3,Ativos:304.1,ValorMercado:1.966,Ano:1959},
    {Nome:"Citigroup",País:"Estados Unidos",Vendas:84.4,Lucro:17.1,Ativos:2314.3,ValorMercado:151.2,Ano:1960},
    {Nome:"Volkswagen Group",País:"Alemanha",Vendas:254.1,Lucro:9.5,Ativos:646.4,ValorMercado:147.2,Ano:1961},
    {Nome:"Walmart",País:"Estados Unidos",Vendas:559.2,Lucro:13.5,Ativos:252.5,ValorMercado:396.1,Ano:1962},
    {Nome:"Wells Fargo",País:"Estados Unidos",Vendas:85.9,Lucro:7.4,Ativos:1.959,ValorMercado:181.5,Ano:1963},
    {Nome:"Verizon Communications",País:"Estados Unidos",Vendas:128.3,Lucro:17.8,Ativos:316.5,ValorMercado:241.3,Ano:1964},
    {Nome:"UnitedHealth Group",País:"Estados Unidos",Vendas:262.9,Lucro:16.9,Ativos:205.2,ValorMercado:369.6,Ano:1965},
    {Nome:"China Merchants Bank",País:"China",Vendas:60.4,Lucro:14.1,Ativos:1.278,ValorMercado:192.8,Ano:1966},
    {Nome:"Alibaba Group",País:"China",Vendas:93.8,Lucro:23.3,Ativos:250.1,ValorMercado:657.5,Ano:1967},
    {Nome:"Allianz",País:"Alemanha",Vendas:129.9,Lucro:7.8,Ativos:1.357,ValorMercado:108,Ano:1968},
    {Nome:"Comcast",País:"Estados Unidos",Vendas:103.6,Lucro:10.5,Ativos:273.9,ValorMercado:252.4,Ano:1969},
    {Nome:"Goldman Sachs Group",País:"Estados Unidos",Vendas:61.8,Lucro:15.1,Ativos:1302,ValorMercado:116.5,Ano:1970},
    {Nome:"Softbank",País:"Japão",Vendas:70.3,Lucro:14.9,Ativos:366.7,ValorMercado:163.1,Ano:1971},
    {Nome:"Postal Savings Bank Of China (PSBC)",País:"China",Vendas:67.2,Lucro:9.3,Ativos:1.736,ValorMercado:112.4,Ano:1972},
    {Nome:"Tencent Holdings",País:"China",Vendas:70,Lucro:23.3,Ativos:203.9,ValorMercado:773.8,Ano:1973},
    {Nome:"BNP Paribas",País:"França",Vendas:102.7,Lucro:7.6,Ativos:3.044,ValorMercado:79.1,Ano:1974},
    

]

const newCompanies = companies.reduce((acc, current) => acc + current.Lucro, 0)

console.log(newCompanies);