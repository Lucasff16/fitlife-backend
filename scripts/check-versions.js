/**
 * Script para verificar as versões do Node.js e dependências
 */

const { execSync } = require('child_process');

function checkNodeVersion() {
  const requiredVersion = '18.20.7';
  const currentVersion = process.version.slice(1); // Remove o 'v' do início
  
  console.log(`\nVerificando versão do Node.js...`);
  console.log(`Versão atual: ${currentVersion}`);
  console.log(`Versão recomendada: ${requiredVersion}\n`);
  
  const current = currentVersion.split('.').map(Number);
  const required = requiredVersion.split('.').map(Number);
  
  if (current[0] < required[0] || 
     (current[0] === required[0] && current[1] < required[1]) ||
     (current[0] === required[0] && current[1] === required[1] && current[2] < required[2])) {
    console.warn('⚠️  AVISO: Sua versão do Node.js é mais antiga que a recomendada.');
    console.warn('   Considere atualizar para evitar problemas de compatibilidade.\n');
  } else {
    console.log('✅ Versão do Node.js compatível!\n');
  }
}

function checkDependencies() {
  console.log('Verificando dependências...');
  try {
    const outdated = execSync('npm outdated --json', { encoding: 'utf8' });
    const outdatedDeps = JSON.parse(outdated);
    
    if (Object.keys(outdatedDeps).length === 0) {
      console.log('✅ Todas as dependências estão atualizadas!\n');
    } else {
      console.warn('⚠️  AVISO: Algumas dependências estão desatualizadas:\n');
      
      for (const [pkg, info] of Object.entries(outdatedDeps)) {
        console.log(`   ${pkg}: ${info.current} → ${info.latest}`);
      }
      console.log('\n   Execute "npm update" para atualizar as dependências não críticas.\n');
    }
  } catch (error) {
    if (error.status === 1) {
      // npm outdated retorna status 1 quando há dependências desatualizadas
      console.warn('⚠️  AVISO: Algumas dependências estão desatualizadas.\n');
      console.log('   Execute "npm update" para atualizar as dependências não críticas.\n');
    } else {
      console.error('❌ Erro ao verificar dependências:', error.message);
    }
  }
}

console.log('=== Verificação de Ambiente do FitLife Backend ===');
checkNodeVersion();
checkDependencies();
console.log('Verificação concluída!');