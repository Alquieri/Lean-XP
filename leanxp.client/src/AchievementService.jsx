import { toast } from 'react-toastify';

export async function WinAchievement(number) {
    const localUser = localStorage.getItem('user');
    if (!localUser) {
        return;
    }
    const user = JSON.parse(localUser);

    // Inclui o UserID na chave do localStorage para garantir unicidade por usuário
    const key = `achievement_${user.id}_${number}_shown`;
    if (localStorage.getItem(key)) {
        // Achievement já mostrado para este usuário, não exibe novamente
        return;
    }

    const showWin = (message, imagemBase64) => {
        toast.success(
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={`data:image/png;base64,${imagemBase64}`}
                    alt="achievement"
                    style={{ width: '30px', height: '30px', marginRight: '10px' }}
                />
                <span>{message}</span>
            </div>,
            {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            }
        );
    };

    try {
        // Busca achievement do backend
        const response = await fetch(`http://localhost:5000/api/achievement/UserIdNumber?userId=${user.id}&number=${number}`);
        if (!response.ok) {
            console.error('Erro na requisição:', response.status);
            return;
        }

        const achievement = await response.json();

        // Verifica se o achievement já está desbloqueado
        if (achievement.achievementStatus === 1) {
            // Achievement já desbloqueado; não mostra a mensagem novamente
            return;
        }

        // Atualiza achievement (PATCH)
        const patchResponse = await fetch(`http://localhost:5000/api/achievement/patch/${achievement.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ AchievementStatus: 1 }),
        });

        if (!patchResponse.ok) {
            console.error('Erro ao atualizar o achievement:', patchResponse.status);
            return;
        }

        const updatedAchievement = await patchResponse.json();

        // Mostrar mensagem toast
        showWin('Parabéns! Você desbloqueou um novo achievement!', updatedAchievement.image);

        // Marca no localStorage que o achievement já foi mostrado para este usuário
        localStorage.setItem(key, 'true');

    } catch (error) {
        console.error('Erro ao processar achievement:', error);
    }
}
