# Webhook da Kiwify para Entrega Automática de Produtos

Este documento explica como configurar e usar o webhook da Kiwify para entregar automaticamente seus produtos digitais via e-mail usando o serviço Resend.

## Visão Geral

Quando um cliente compra um produto na Kiwify, a plataforma envia um webhook para o seu servidor. Este webhook contém informações sobre a compra, incluindo dados do cliente e do produto. O servidor processa essas informações e envia automaticamente um e-mail para o cliente com o link para acessar o produto.

## Configuração

### 1. Configurar Variáveis de Ambiente

Crie ou edite o arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
# Resend API Key - Obtenha em https://resend.com
RESEND_API_KEY=sua_chave_api_resend

# Configurações da Kiwify
KIWIFY_WEBHOOK_SECRET=seu_webhook_secret_da_kiwify

# URLs dos produtos
PRODUCT_FLUXO_DE_CAIXA_URL=https://drive.google.com/file/d/seu-arquivo-fluxo-de-caixa/view
# Adicione outros produtos conforme necessário
```

### 2. Configurar o Webhook na Kiwify

1. Acesse sua conta na Kiwify
2. Vá para Configurações > Webhooks
3. Adicione um novo webhook com a URL: `https://planilhasprofissionais.com/api/webhook/kiwify`
4. Selecione o evento `order.approved` (ou outros eventos que desejar monitorar)
5. Copie o segredo gerado e adicione-o à variável `KIWIFY_WEBHOOK_SECRET` no arquivo `.env.local`

### 3. Configurar o Resend

1. Crie uma conta no [Resend](https://resend.com)
2. Verifique seu domínio (planilhasprofissionais.com)
3. Crie uma chave de API e adicione-a à variável `RESEND_API_KEY` no arquivo `.env.local`

## Como Funciona

1. Cliente compra um produto na Kiwify
2. Kiwify envia um webhook para `/api/webhook/kiwify` quando o pagamento é aprovado
3. O servidor verifica a assinatura do webhook para garantir que é legítimo
4. O servidor identifica qual produto foi comprado e obtém o link correspondente
5. O servidor envia um e-mail para o cliente com o link para acessar o produto
6. O cliente recebe o e-mail e pode acessar o produto

## Testando o Envio de E-mails

Você pode testar o envio de e-mails usando o endpoint `/api/test-email`. Envie uma requisição POST com os seguintes dados:

```json
{
  "email": "cliente@exemplo.com",
  "name": "Nome do Cliente",
  "productName": "Nome do Produto"
}
```

Exemplo usando curl:

```bash
curl -X POST https://planilhasprofissionais.com/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"email":"cliente@exemplo.com","name":"Nome do Cliente","productName":"Fluxo de Caixa 4.0"}'
```

## Adicionando Novos Produtos

Para adicionar novos produtos:

1. Adicione o link do produto no arquivo `.env.local`:
   ```
   PRODUCT_NOVO_PRODUTO_URL=https://drive.google.com/file/d/seu-novo-arquivo/view
   ```

2. Atualize a função `getProductLinkById` no arquivo `src/pages/api/webhook/kiwify.ts`:
   ```typescript
   function getProductLinkById(productId: string): string {
     const productLinks: Record<string, string | undefined> = {
       'produto-fluxo-de-caixa-4-0': process.env.PRODUCT_FLUXO_DE_CAIXA_URL,
       'produto-novo': process.env.PRODUCT_NOVO_PRODUTO_URL,
       // Adicione outros produtos conforme necessário
     };

     return productLinks[productId] || 'https://planilhasprofissionais.com/contato';
   }
   ```

## Solução de Problemas

### O webhook não está funcionando

- Verifique se a URL do webhook está correta na Kiwify
- Verifique se o segredo do webhook está correto no arquivo `.env.local`
- Verifique os logs do servidor para ver se há erros

### Os e-mails não estão sendo enviados

- Verifique se a chave de API do Resend está correta
- Verifique se o domínio está verificado no Resend
- Verifique os logs do servidor para ver se há erros
- Teste o envio de e-mails usando o endpoint `/api/test-email`

## Recursos Adicionais

- [Documentação da API da Kiwify](https://developers.kiwify.com.br/)
- [Documentação do Resend](https://resend.com/docs)
- [Documentação do Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) 