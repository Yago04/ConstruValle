<?php
// Habilita o CORS para o seu Front-end conseguir acessar
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Trata requisições OPTIONS (Preflight do navegador)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Importa as classes do PHPMailer (Certifique-se de que a pasta 'PHPMailer' está no mesmo diretório)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Recebe os dados do formulário React (enviados como JSON)
$dados = json_decode(file_get_contents("php://input"), true);

if (!$dados) {
    echo json_encode(["error" => "Dados não recebidos."]);
    exit;
}

$nome = filter_var($dados['nome'], FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_var($dados['email'], FILTER_VALIDATE_EMAIL);
$assunto = filter_var($dados['assunto'], FILTER_SANITIZE_SPECIAL_CHARS);
$mensagem = filter_var($dados['mensagem'], FILTER_SANITIZE_SPECIAL_CHARS);

if (!$nome || !$email || !$assunto || !$mensagem) {
    echo json_encode(["error" => "Por favor, preencha todos os campos corretamente."]);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Configurações do Servidor SMTP da Hostinger
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'site@construvalle.com.br'; // Seu e-mail da Hostinger
    $mail->Password   = 'SUA_SENHA_AQUI';            // Senha do e-mail
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Ativa criptografia TLS/SSL
    $mail->Port       = 465;
    $mail->CharSet    = 'UTF-8';

    // Remetente e Destinatário
    $mail->setFrom('site@construvalle.com.br', 'Site Construvalle');
    $mail->addAddress('contato@construvalle.com.br'); // E-mail que vai receber a mensagem
    $mail->addReplyTo($email, $nome);                 // Responder para o cliente

    // Conteúdo do E-mail
    $mail->isHTML(true);
    $mail->Subject = "[Novo Contato] " . $assunto;
    
    // Layout do E-mail
    $mail->Body    = "
        <div style='font-family: sans-serif; background-color: #0f0f0f; color: #fff; padding: 20px; border-radius: 10px;'>
            <h2 style='color: #a17a38; border-bottom: 1px solid #1a1a1a; padding-bottom: 10px;'>Nova mensagem do site</h2>
            <p><strong>Nome:</strong> {$nome}</p>
            <p><strong>E-mail:</strong> {$email}</p>
            <p><strong>Assunto:</strong> {$assunto}</p>
            <div style='background-color: #050505; padding: 15px; border-radius: 5px; border: 1px solid #1a1a1a; margin-top: 15px;'>
                <p style='margin: 0; white-space: pre-line;'>{$mensagem}</p>
            </div>
        </div>
    ";

    $mail->send();
    echo json_encode(["message" => "E-mail enviado com sucesso!"]);
} catch (Exception $e) {
    echo json_encode(["error" => "Erro ao enviar e-mail: {$mail->ErrorInfo}"]);
}