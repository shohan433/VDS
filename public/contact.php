<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow requests from any origin just in case
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$inputJSON = file_get_contents('php://input');
$body = json_decode($inputJSON, true);

$name = $body['name'] ?? '';
$email = $body['email'] ?? '';
$subject = $body['subject'] ?? '';
$message = $body['message'] ?? '';

if (!$name || !$email || !$subject || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields are required.']);
    exit;
}

$subjectLabels = [
    "ui-ux" => "UI/UX Design",
    "web-dev" => "Web Development",
    "branding" => "Branding & Identity",
    "digital-marketing" => "Digital Marketing",
    "other" => "Other",
];

$subjectLabel = $subjectLabels[$subject] ?? $subject;
$to = "info@virtualdigitalsolution.com";
$emailSubject = "[VDS Contact] " . $subjectLabel . " — from " . $name;

$escapedMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

$htmlContent = "
<div style=\"font-family: 'Segoe UI', Arial, sans-serif; background: #050b16; color: #f8fafc; max-width: 600px; margin: 0 auto; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08);\">
  <div style=\"background: linear-gradient(135deg, #0e1628 0%, #121f3d 100%); padding: 36px 40px 28px; border-bottom: 1px solid rgba(56,189,248,0.15);\">
    <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 8px;\">
      <div style=\"width: 10px; height: 10px; border-radius: 50%; background: #22d3ee; box-shadow: 0 0 10px rgba(34,211,238,0.6);\"></div>
      <span style=\"font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #22d3ee; font-weight: 600;\">New Contact Request</span>
    </div>
    <h1 style=\"margin: 0; font-size: 26px; font-weight: 700; color: #f8fafc; line-height: 1.3;\">
      $subjectLabel
    </h1>
    <p style=\"margin: 6px 0 0; color: #94a3b8; font-size: 14px;\">Received via virtualdigitalsolution.com</p>
  </div>

  <div style=\"padding: 32px 40px;\">
    <table style=\"width: 100%; border-collapse: collapse; margin-bottom: 28px;\">
      <tr>
        <td style=\"padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);\">
          <span style=\"font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b;\">Name</span><br/>
          <span style=\"font-size: 15px; color: #e2e8f0; font-weight: 500; margin-top: 4px; display: block;\">$name</span>
        </td>
      </tr>
      <tr>
        <td style=\"padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);\">
          <span style=\"font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b;\">Email</span><br/>
          <a href=\"mailto:$email\" style=\"font-size: 15px; color: #22d3ee; text-decoration: none; margin-top: 4px; display: block;\">$email</a>
        </td>
      </tr>
      <tr>
        <td style=\"padding: 10px 0;\">
          <span style=\"font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b;\">Subject</span><br/>
          <span style=\"font-size: 15px; color: #e2e8f0; font-weight: 500; margin-top: 4px; display: block;\">$subjectLabel</span>
        </td>
      </tr>
    </table>

    <div style=\"background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 20px 24px;\">
      <span style=\"font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #64748b; display: block; margin-bottom: 10px;\">Message</span>
      <p style=\"margin: 0; font-size: 15px; color: #cbd5e1; line-height: 1.7; white-space: pre-wrap;\">$escapedMessage</p>
    </div>

    <div style=\"margin-top: 28px; text-align: center;\">
      <a href=\"mailto:$email\" style=\"display: inline-block; background: #22d3ee; color: #0a0f1a; font-weight: 700; font-size: 14px; padding: 12px 32px; border-radius: 999px; text-decoration: none;\">
        Reply to $name
      </a>
    </div>
  </div>
</div>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: no-reply@virtualdigitalsolution.com" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";

if (mail($to, $emailSubject, $htmlContent, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send message. Please try again.']);
}
?>
